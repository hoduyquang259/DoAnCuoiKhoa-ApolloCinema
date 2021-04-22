import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HooksPage() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(
      "useEffect - tương đương didmount bên class - khi tham số thứ 2 là mảng rỗng"
    );
  }, []);

  useEffect(() => {
    console.log(
      "useEffect - tương đương didUpdate bên class - khi tham số thứ 2 là mảng khác rỗng"
    );
  }, [number]);

  useEffect(() => {
    return () => {
      console.log(
        "useEffect - tương đương willUnmout bên class - khi callback của useEffect trả về 1 hàm khác"
      );
    };
  }, []);

  const handleTangSo = () => {
    setNumber(number + 1);
  };

  const showNumber = () => {
    console.log("showNumber");
  };

  const showNumberCallback = useCallback(showNumber, []);

  const showNumberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const showNumberUpMemo = useMemo(() => showNumberUp(), []);

  return (
    <div>
      <h3>HooksPage</h3>
      <p>Number: {number}</p>
      <button className="btn btn-success" onClick={handleTangSo}>
        Tăng số
      </button>
      <hr />
      {/* <Child number={number} /> */}
      <Child showNumber={showNumberCallback} />
      <hr />
      <p>NumberUp: {showNumberUpMemo}</p>
    </div>
  );
}
