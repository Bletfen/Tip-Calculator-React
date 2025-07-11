import "./maincontainer.css";
import dollarSign from "/images/icon-dollar.svg";
import personSign from "/images/icon-person.svg";
import InputContainer from "./input/InputContainer";
import Amount from "./amount/Amount";
const tipArray = [5, 10, 15, 25, 50];
export default function MainContainer() {
  return (
    <div className="main-container">
      <div className="bill-input-person-wrapper">
        <InputContainer value={"Bill"} svg={dollarSign} />
        <div className="tip-container">
          <span className="tip-text">Select Tip %</span>
          <div className="tip-wrapper">
            {tipArray.map((tip) => (
              <button key={tip} className="tip-percent">
                {tip}%
              </button>
            ))}
            <button className="customButton tip-percent">Custom</button>
          </div>
        </div>
        <InputContainer value={"Number of People"} svg={personSign} />
      </div>
      <div className="tip-amount-container">
        <div className="amount-wrapper">
          <Amount amountText={"Tip Amount"} person={"/ person"} />
          <Amount amountText={"Total"} person={"/ person"} />
        </div>
        <button className="reset-button">RESET</button>
      </div>
    </div>
  );
}
