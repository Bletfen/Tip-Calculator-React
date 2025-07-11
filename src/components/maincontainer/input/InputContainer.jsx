import "./inputcontainer.css";
export default function InputContainer({
  valueText,
  svg,
  billPeople,
  setBillPeople,
  zero,
  allowDecimal = false,
}) {
  return (
    <div className="input-container">
      <div className="people-zero-wrapper">
        <span className="value-text">{valueText}</span>
        {zero ? <span className="not-zero">{zero}</span> : ""}
      </div>
      <div
        className="value-input"
        style={zero ? { border: "0.2rem solid #E17052" } : {}}
      >
        <img src={svg} alt="dollar-icon" />
        <input
          type="number"
          className="input-value"
          placeholder="0"
          value={billPeople}
          onChange={(e) => setBillPeople(e.target.value)}
          onKeyDown={(e) => {
            const key = e.key;
            const isNumber = /^[0-9]$/.test(key);
            const isDecimal = key === ".";
            const isAllowed =
              isNumber ||
              (allowDecimal && isDecimal) ||
              key === "Backspace" ||
              key === "Tab";
            if (!isAllowed) {
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
}
