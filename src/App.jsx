import React, { useState } from "react";
import "./App.css";
import Grid from "@mui/material/Grid";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => {
      // If the current display value is 0 or the previous value was the result of an operation,
      // replace it with the clicked number; otherwise, append the number.
      return prevValue === "0" || prevValue.includes("=") ? number : prevValue + number;
    });
  };

  const handleEqual = () => {
    console.log("fuk",displayValue,",",typeof(displayValue))
    // Do nothing if the display value is 0 or already contains an operation
    // if (
    //   displayValue === "0" ||
    //   displayValue.includes("+") ||
    //   displayValue.includes("-") ||
    //   displayValue.includes("/") ||
    //   displayValue.includes("x")
    // ) {
    //   return;
    // }

    // Remove any leading zeros from the display value
    // const sanitizedDisplayValue = displayValue.replace(/^0+(?=\d)/, '');

    // Evaluate the expression and calculate the result using eval()
    const result = eval(displayValue);
console.log("eval",result)
    // Set the display value to the result
    setDisplayValue(result.toString());
  };

  const handleOperationClick = (operation) => {
    // Do nothing if the display value is 0 or already contains an operation
    if (
      displayValue === "0" ||
      displayValue.includes("+") ||
      displayValue.includes("-") ||
      displayValue.includes("/") ||
      displayValue.includes("*")
    ) {
      return;
    }

    // Append the operation to the display value
    setDisplayValue((prevValue) => prevValue + operation);
  };

  const handleClear = () => {
    // Clear the display
    setDisplayValue("0");
  };

  return (
    <div className="container">
      <div className="calcBody">
        <div className="screen">
          <p>{displayValue}</p>
        </div>
        <div className="numbers">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <Grid item xs={2} sm={4} md={4} key={number}>
                <span
                  key={number}
                  onClick={() => handleNumberClick(String(number))}
                >
                  <strong>{number}</strong>
                </span>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="operations">
          {["+", "-", "/", "*"].map((operation) => (
            <span
              key={operation}
              onClick={() => handleOperationClick(operation)}
            >
              {operation}
            </span>
          ))}
        </div>
        <div className="so">
          <span onClick={handleClear}>C</span>
          <span onClick={handleEqual}>=</span>
        </div>
      </div>
    </div>
  );
}

export default App;
