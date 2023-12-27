import { useState, useEffect, useRef } from "react";

export default function Clicker({ keyName, color, increment }) {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  );
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "papayawhip";
    buttonRef.current.style.color = "salmon";
    return () => {
      localStorage.removeItem("count");
    };
  }, [count]);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    increment();
  };

  return (
    <div>
      <div style={{ color }}>Clicks count: {count}</div>
      <button ref={buttonRef} onClick={buttonClick}>
        Click Me
      </button>
    </div>
  );
}
