import "./maincontainer.css";
import dollarSign from "/images/icon-dollar.svg";
import personSign from "/images/icon-person.svg";
import InputContainer from "./input/InputContainer";
import Amount from "./amount/Amount";
import { useState } from "react";
const tipArray = [5, 10, 15, 25, 50];
export default function MainContainer() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(0);
  const numericBill = Number(bill);
  const numericPeople = Number(people);
  const tipAmount = (numericBill * tip) / 100;
  const tipPerPerson = numericPeople > 0 ? tipAmount / numericPeople : 0;
  const totalPerPerson = numericPeople > 0 ? numericBill + tipAmount : 0;
  function resetHandler() {
    setBill("");
    setPeople("");
    setTip(0);
  }
  return (
    <div className="main-container">
      <div className="bill-input-person-wrapper">
        <InputContainer
          valueText={"Bill"}
          svg={dollarSign}
          billPeople={bill}
          setBillPeople={setBill}
          allowDecimal={true}
        />
        <div className="tip-container">
          <span className="tip-text">Select Tip %</span>
          <div className="tip-wrapper">
            {tipArray.map((currentTip) => (
              <button
                key={currentTip}
                className={`tip-percent ${
                  currentTip === tip && tipArray.includes(tip) ? "active" : ""
                }`}
                onClick={() => {
                  setTip(currentTip);
                }}
              >
                {currentTip}%
              </button>
            ))}

            <input
              type="number"
              className={`customButton tip-percent ${
                tip && !tipArray.includes(tip) ? "active" : ""
              }`}
              placeholder="Custom"
              value={tip && !tipArray.includes(tip) ? tip : ""}
              onChange={(e) => {
                const value = e.target.value;
                setTip(Number(value));
              }}
              onKeyDown={(e) => {
                const key = e.key;
                const isNumber = /^[0-9]$/.test(key);
                const isDecimal = key === ".";
                const remove = key === "Backspace";
                const arrows = key === "ArrowLeft" || key === "ArrowRight";
                if (!isNumber && !isDecimal && !remove && !arrows) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>
        <InputContainer
          valueText={"Number of People"}
          svg={personSign}
          billPeople={people}
          setBillPeople={setPeople}
          zero={people !== "" && numericPeople === 0 ? "Can't be zero" : ""}
          allowDecimal={false}
        />
      </div>
      <div className="tip-amount-container">
        <div className="amount-wrapper">
          <Amount
            amountText={"Tip Amount"}
            person={"/ person"}
            amountInDollars={tipPerPerson}
          />
          <Amount
            amountText={"Total"}
            person={"/ person"}
            amountInDollars={totalPerPerson}
          />
        </div>
        <button
          className={`reset-button ${bill || people || tip ? "active" : ""}`}
          onClick={resetHandler}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
