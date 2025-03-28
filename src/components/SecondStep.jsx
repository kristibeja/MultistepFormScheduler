import React, { useState } from "react";
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
  const [errors, setErrors] = useState({});

  const validateInputFields = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s\-']+$/.test(firstName.trim())) {
      newErrors.firstName = "Invalid characters in first name!";
    }

    if (!/^[A-Za-z\s\-']+$/.test(firstName.trim())) {
      newErrors.lastName = "Invalid characters in last name!";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      newErrors.email = "Please check your email address!";
    }

    if (!/^\d{10,}$/.test(phone.trim())) {
      newErrors.phone = "Phone must be at least 10 digits!";
    }

    if (!termsChecked) {
      newErrors.terms =
        "You need to accept terms and conditions before submitting!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputFields()) {
      setStep(3);
    }
  };

  return (
    <section className="second-step">
      <h1>Add Your Personal Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>
        <div className="form-input">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-input">
          <input
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
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
          {errors.terms && <p className="error-text">{errors.terms}</p>}
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
