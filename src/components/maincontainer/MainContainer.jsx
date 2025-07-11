import "./maincontainer.css";
import dollarSign from "/images/icon-dollar.svg";
import personSign from "/images/icon-person.svg";
import InputContainer from "./input/InputContainer";
const tipArray = [5, 10, 15, 25, 50, "custom"];
export default function MainContainer() {
  return (
    <div className="main-container">
      <InputContainer value={"Bill"} svg={dollarSign} />
      <div className="tip-container">
        <span className="tip-text">Select Tip %</span>
        <div className="tip-wrapper">
          {tipArray.map((tip) => (
            <button key={tip} className="tip-percent">
              {tip}%
            </button>
          ))}
        </div>
      </div>
      <InputContainer value={"Number of People"} svg={personSign} />
    </div>
  );
}
