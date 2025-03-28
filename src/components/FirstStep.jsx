import React from "react";
import "./FirstStep.css";
import { SlArrowRight } from "react-icons/sl";

const FirstStep = ({ time, setTime, setStep }) => {
  const timesArray = [
    { id: 0, title: "Choose Your Time" },
    { id: 1, title: "8AM CST" },
    { id: 2, title: "9AM CST" },
    { id: 3, title: "10AM CST" },
    { id: 4, title: "11AM CST" },
    { id: 5, title: "12PM CST" },
    { id: 6, title: "1PM CST" },
    { id: 7, title: "2PM CST" },
    { id: 8, title: "3PM CST" },
    { id: 9, title: "4PM CST" },
    { id: 10, title: "5PM CST" },
  ];

  return (
    <section className="first-step">
      <h1>What Is The Best Time to Reach You?</h1>
      <div className="first-content">
        <select
          name="time"
          id="times"
          defaultValue="Choose Your Time"
          onChange={(e) => setTime(e.target.value)}
        >
          {timesArray.map((time) => {
            return (
              <option
                key={time.id}
                value={time.title}
                disabled={time.id === 0 ? true : false}
              >
                {time.title}
              </option>
            );
          })}
        </select>
        <p>(All times are in CST)</p>
        <button
          className="btn-submit"
          disabled={!time}
          onClick={() => setStep(2)}
        >
          Continue <SlArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FirstStep;
