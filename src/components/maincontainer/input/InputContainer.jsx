import "./inputcontainer.css";
export default function InputContainer({ value, svg }) {
  return (
    <div className="input-container">
      <span className="value-text">{value}</span>
      <div className="value-input">
        <img src={svg} alt="dollar-icon" />
        <input type="number" className="input-value" />
      </div>
    </div>
  );
}
