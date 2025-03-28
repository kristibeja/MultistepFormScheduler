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
                <td>
                  <b>First Name:</b>
                </td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td>
                  <b>Last Name:</b>
                </td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td>
                  <b>Email:</b>
                </td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>
                  <b>Phone:</b>
                </td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>
                  <b>Scheduled:</b>
                </td>
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
