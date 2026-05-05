// src/pages/TrainingMode/components/DifficultySelector.jsx
import React from "react";

const difficulties = [
  { id: "beginner", label: "Beginner" },
  { id: "engineer", label: "Engineer" },
  { id: "research", label: "Research" },
];

function DifficultySelector({ difficulty, setDifficulty, disabled }) {
  return (
    <div className="difficulty-selector">
      <span>Difficulty</span>

      <div className="difficulty-options">
        {difficulties.map((item) => (
          <button
            key={item.id}
            className={difficulty === item.id ? "active" : ""}
            onClick={() => setDifficulty(item.id)}
            disabled={disabled}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DifficultySelector;
