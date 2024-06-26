import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!inputIsValid && (
        <p className="center">Please Enter duration greater than 0</p>
      )}
      {inputIsValid && <Result input={userInput}></Result>}
    </>
  );
}

export default App;
