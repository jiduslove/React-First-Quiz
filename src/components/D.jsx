import React, { useState } from "react";
import axios from "axios";

export default function D() {
  const [message, setMessage] = useState();

  const onClickBtn = async () => {
    try {
      const response = await axios.get(`https://green-bush-5824.fly.dev`);

      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);

      alert("에러");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <button className="btn-style" onClick={onClickBtn}>
        요 청
      </button>
      {message && <div className="mt-16 text-2xl font-bold">{message}</div>}{" "}
      {/*왼쪽 연산자가 true일경우, 오른쪽 연산자를 반환한다. */}
    </div>
  );
}
