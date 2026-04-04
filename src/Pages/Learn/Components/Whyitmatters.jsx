import "../Styles/Components.css";
export default function WhyItMatters({
  title = "Why This Matters",
  points = [],
}) {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}