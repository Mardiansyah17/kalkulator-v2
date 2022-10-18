import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import Display from "./components/Display";

function App() {
  const [valueDisplay, setValueDisplay] = useState("0");
  function changeInput(e) {
    let val = valueDisplay;
    if (val === "0") {
      val = e;
      setValueDisplay(val);
    } else {
      let str = val.substr(val.length - 1);
      if (
        e.includes("+") ||
        e.includes("-") ||
        e.includes("*") ||
        e.includes("/")
      ) {
        console.log("a");

        if (
          str.includes("+") ||
          str.includes("-") ||
          str.includes("*") ||
          str.includes("/")
        ) {
          let replaceOperation = val.replace(val.charAt(val.length - 1), e);
          setValueDisplay(replaceOperation);
        } else {
          val += e;
          setValueDisplay(val);
        }
      } else {
        val += e;
        setValueDisplay(val);
      }
    }
  }
  function deleteHandler() {
    let number = valueDisplay;
    if (number.length > 1) {
      setValueDisplay(number.slice(0, -1));
    } else {
      number = "0";
      setValueDisplay(number);
    }
  }

  function jumlahkan() {
    let number = valueDisplay.replace(",", ".");
    let calculation = number.match(/[^\d()]+|[\d.]+/g);
    let res;
    for (var a = 0; a < calculation.length; a++) {
      if (a == 0) {
        res = parseFloat(calculation[a]);
      } else {
        if (!isNaN(calculation[a])) {
          switch (calculation[a - 1]) {
            case "-":
              res -= parseFloat(calculation[a]);
              break;
            case "+":
              res += parseFloat(calculation[a]);
              break;
            case "*":
              res *= parseFloat(calculation[a]);
              break;
            case "/":
              res /= parseFloat(calculation[a]);
              break;
          }
        }
      }
    }
    setValueDisplay(res.toString());
    // setValueDisplay(toString(res));
  }

  function resetDisplay() {
    let number = valueDisplay;
    number = "0";
    setValueDisplay(number);
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div
        className="
      background w-full text-white h-screen lg:w-1/4   lg:h-[95%] sm:rounded-xl mx-auto flex-col flex
      "
      >
        <Display value={valueDisplay} />
        <div className="basis-full flex items-end  ">
          {/* <h1 className="bg-red-500 p-10">halo</h1> */}
          <ButtonGroup
            deleteHandler={deleteHandler}
            inputHandler={changeInput}
            jumlahkan={jumlahkan}
            resetDisplay={resetDisplay}
          />
          {/* <h1>halo</h1> */}
        </div>
      </div>
    </div>
  );
}

export default App;
