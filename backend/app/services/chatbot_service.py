import json
import random
import re
from pathlib import Path
from typing import Any


class ChatbotService:
    def __init__(self) -> None:
        base_dir = Path(__file__).resolve().parents[2]
        knowledge_base_path = base_dir / "data" / "chatbot_knowledge_base.json"

        with knowledge_base_path.open("r", encoding="utf-8") as file:
            self.knowledge_base: dict[str, Any] = json.load(file)

        self.intents = self.knowledge_base.get("intents", [])
        self.fallbacks = self.knowledge_base.get("fallbacks", [])

    def get_answer(self, message: str) -> dict[str, Any]:
        normalized_message = self._normalize(message)

        if not normalized_message:
            return self._fallback_response()

        best_match = self._find_best_match(normalized_message)

        if best_match["confidence"] > 0:
            intent = best_match["intent"]
            return {
                "answer": self._choose_answer(intent),
                "matched_intent": intent.get("intent"),
                "category": intent.get("category"),
                "confidence": best_match["confidence"],
                "source": "offline_knowledge_base",
            }

        return self._fallback_response()

    def _fallback_response(self) -> dict[str, Any]:
        return {
            "answer": random.choice(self.fallbacks) if self.fallbacks else "I do not know that yet.",
            "matched_intent": None,
            "category": None,
            "confidence": 0.0,
            "source": "fallback",
        }
    

    def _find_best_match(self, normalized_message: str) -> dict[str, Any]:
        best_intent = None
        best_score = 0

        for intent in self.intents:
            if not intent.get("intent"):
                continue

            score = 0

            for question in intent.get("questions", []):
                normalized_question = self._normalize(question)

                if normalized_message == normalized_question:
                    score += 12
                elif normalized_question in normalized_message:
                    score += 6
                elif self._token_overlap_score(normalized_message, normalized_question) >= 0.65:
                    score += 4

            for keyword in intent.get("keywords", []):
                normalized_keyword = self._normalize(keyword)


                if self._contains_phrase(normalized_message, normalized_keyword):
                    score += 3 if self._is_short_message(normalized_message) else 2

            if score > best_score:
                best_score = score
                best_intent = intent

        if best_score < 2:
            best_intent = None
            best_score = 0

        return {
            "intent": best_intent,
            "confidence": min(round(best_score / 12, 2), 1.0) if best_intent else 0.0,
        }

    def _choose_answer(self, intent: dict[str, Any]) -> str:
        answers = intent.get("answers")

        if isinstance(answers, list) and answers:
            return random.choice(answers)
        

        return intent.get("answer", "I found a matching topic, but I do not have an answer for it yet.")

    def _normalize(self, text: str) -> str:
        text = text.lower().strip()
        text = re.sub(r"[^a-z0-9\s-]", "", text)
        text = re.sub(r"\s+", " ", text)
        return text

    def _is_short_message(self, text: str) -> bool:
        return len(text.split()) <= 3

    def _contains_phrase(self, text: str, phrase: str) -> bool:
        if not phrase:
            return False

        if " " in phrase or "-" in phrase:
            return phrase in text

        return bool(re.search(rf"\b{re.escape(phrase)}\b", text))

    def _token_overlap_score(self, text: str, phrase: str) -> float:
        text_tokens = set(text.split())
        phrase_tokens = set(phrase.split())


        if not text_tokens or not phrase_tokens:
            return 0.0

        return len(text_tokens & phrase_tokens) / len(phrase_tokens)