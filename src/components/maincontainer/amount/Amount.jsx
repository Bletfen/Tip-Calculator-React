import "./amount.css";
export default function Amount({ amountText, person, amountInDollars }) {
  return (
    <div className="amount-container">
      <div className="text">
        <p className="tip-amount-text">{amountText}</p>
        <span className="person-text">{person}</span>
      </div>
      <span className="amount-in-dollars">{`$${amountInDollars.toFixed(
        2
      )}`}</span>
    </div>
  );
}
