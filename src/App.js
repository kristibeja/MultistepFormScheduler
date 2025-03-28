import React, { useState } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  console.log([
    { ora: time },
    { hapi: step },
    { name: firstName },
    { lname: lastName },
    { email: email },
    { phone: phone },
    { terms: termsChecked },
  ]);

  const handleResetForm = () => {
    setStep(1);
    setTime(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTermsChecked(false);
  };
  return (
    <>
      <header className="container">
        <div className="header-content">
          <a href="#" className="logo">
            K<i>I</i>NET<i>I</i>C
          </a>

          <div className="contact-info">
            <p>Talk to a Consolidation Specialist</p>
            <a href="tel:(888) 888-8888">
              <FaPhoneAlt /> (888) 888-8888
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        {step === 1 && (
          <FirstStep time={time} setTime={setTime} setStep={setStep} />
        )}
        {step === 2 && (
          <SecondStep
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            termsChecked={termsChecked}
            setTermsChecked={setTermsChecked}
            setStep={setStep}
          />
        )}
        {step === 3 && (
          <ThirdStep
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            time={time}
            setStep={setStep}
            handleResetForm={handleResetForm}
          />
        )}
      </main>

      <footer>
        <div className="footer-links container">
          <a href="#">Terms and Conditions</a>&nbsp;|&nbsp;
          <a href="#">Privacy Policy</a>&nbsp;|&nbsp;
          <a href="#">California Privacy</a>
        </div>
        <div className="footer-content">
          <div className="container">
            <p>
              This site is not part of the Facebook website. FACEBOOK is a
              trademark of FACEBOOK Inc. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. This
              site is not part of the Facebook website. FACEBOOK is a trademark
              of FACEBOOK Inc.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. This site is not part of
              the Facebook website. FACEBOOK is a trademark of FACEBOOK Inc.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. This site is not part of
              the Facebook website. FACEBOOK is a trademark of FACEBOOK Inc.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. This site is not part
              of the Facebook website. FACEBOOK is a trademark of FACEBOOK Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
