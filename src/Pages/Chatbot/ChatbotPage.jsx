import { useEffect, useRef, useState } from "react";
import "./ChatbotPage.css";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your offline Atomic Clock Assistant. Ask me about atomic clocks, GPS timing, accuracy, types, or time standards.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);
  const chatBodyRef = useRef(null);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const handleGlobalTyping = (event) => {
      const target = event.target;
      const isTypingTarget =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (
        isTypingTarget ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.key.length !== 1
      ) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus({ preventScroll: true });
      setInput((prev) => prev + event.key);
    };

    window.addEventListener("keydown", handleGlobalTyping);

    return () => {
      window.removeEventListener("keydown", handleGlobalTyping);
    };
  }, []);

  const sendMessage = async () => {
    const trimmedMessage = input.trim();

    if (!trimmedMessage || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: trimmedMessage,
      },
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I cannot connect to the chatbot backend right now. Please make sure the FastAPI server is running.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 0);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className="chatbot-page">
      <div className="chatbot-shell">
        <div className="chatbot-header">
          <div>
            <p className="chatbot-kicker">Atomic Insight AI</p>
            <h1>Atomic Clock Assistant</h1>
          </div>

          <div className="chatbot-status">
            <span></span>
            Offline Knowledge Mode
          </div>
        </div>

        <div className="chatbot-body" ref={chatBodyRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message-row ${
                message.sender === "user" ? "user-row" : "bot-row"
              }`}
            >
              <div
                className={`chatbot-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chatbot-message-row bot-row">
              <div className="chatbot-message bot-message typing">
                Thinking...
              </div>
            </div>
          )}
        </div>

        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about atomic clocks, time, lasers, or GPS..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={sendMessage} disabled={isLoading}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
