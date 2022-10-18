import React from "react";

export default function Display({ value }) {
  return (
    <div className="h-1/3 flex items-end justify-end pr-7 basis-3/5   text-slate-600 font-medium text-5xl">
      <h1 className="">{value.replace(/\s/g, "")}</h1>
    </div>
  );
}
