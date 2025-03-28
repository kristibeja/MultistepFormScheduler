import React from "react";
import "./ThirdStep.css";

const ThirdStep = ({
  firstName,
  lastName,
  email,
  phone,
  time,
  handleResetForm,
}) => {
  return (
    <section className="third-step">
      <h1>Thank you for submitting!</h1>
      <div className="third-content">
        <h3>Find your details below:</h3>
        <div className="table-data">
          <table>
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Scheduled:</td>
                <td>{time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn-submit" onClick={handleResetForm}>
        Go back to scheduler
      </button>
    </section>
  );
};

export default ThirdStep;
