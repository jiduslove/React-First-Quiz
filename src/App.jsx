import React from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";

export default function App() {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col gap-8 justify-center items-center">
      <A />
      <B />
      <C />
      <D />
    </div>
  );
}
