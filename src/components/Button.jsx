import React from "react";

export default function Button(props) {
  const { color, bg, text, simbol, inputHandler } = props;
  function changeHandler(e) {
    // console.log(e.target);

    inputHandler(e.target.innerHTML);
    // if (e.target.localName == "div") {
    //   console.log("first");
    // } else {
    //   if (e.target.localName == "path") {
    //     inputHandler(e.target.parentElement.parentElement.dataset.value);
    //   } else if (e.target.localName == "svg") {
    //     inputHandler(e.target.parentElement.dataset.value);
    //   }
    // }
  }

  return (
    <div
      onClick={changeHandler}
      data-value={simbol}
      className={`p-4 sm:p-8 lg:p-3 cursor-pointer  hover:scale-110 active:bg-blue-500 duration-300 transition ease-in-out text-3xl button ${color} shadow-sm ${bg} mb-4`}
    >
      {text}
    </div>
  );
}
