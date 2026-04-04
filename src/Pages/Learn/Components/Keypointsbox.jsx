import "../Styles/Components.css";
export default function Keypointsbox({ title = "Key Points", points = [] }) {
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