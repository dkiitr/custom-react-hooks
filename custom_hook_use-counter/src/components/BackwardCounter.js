// import { useState, useEffect } from 'react';

import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  //older way:
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // custom hook useCounter way:
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
