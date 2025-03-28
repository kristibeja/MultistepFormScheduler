import React from "react";
import { SlArrowRight } from "react-icons/sl";
import "./SecondStep.css";

const SecondStep = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  termsChecked,
  setTermsChecked,
  setStep,
}) => {
  return (
    <section className="second-step">
      <h1>Add Your Personal Details</h1>

      <form onSubmit={() => setStep(3)}>
        <div className="form-input">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <p className="error-text">Please enter your first name</p> */}
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <p className="error-text">Please enter your last name</p> */}
        </div>
        <div className="form-input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <p className="error-text">Please enter your email</p> */}
        </div>
        <div className="form-input">
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* <p className="error-text">Please enter your phone number</p> */}
        </div>
        <div className="form-input">
          <div className="checbox-input">
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(!termsChecked)}
            />
            <label htmlFor="terms">
              By clicking the button above, you acknowledge, consent and
              agreement to the following. By checking this box, you agree to our
              Terms and Conditions. You acknowledge that: You have read and
              understood our terms. You agree to comply with all applicable
              rules and policies. We may update these terms from time to time.
            </label>
          </div>
          {/* <p className="error-text">
            You need to accept terms and conditions before submitting
          </p> */}
        </div>
        <button
          className="btn-submit"
          type="submit"
          disabled={
            !firstName || !lastName || !email || !phone || !termsChecked
          }
        >
          Submit your details <SlArrowRight />
        </button>
      </form>
    </section>
  );
};

export default SecondStep;
