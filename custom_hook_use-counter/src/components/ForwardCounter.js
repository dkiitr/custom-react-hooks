import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  // older ways

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // useCounter Custom hook way

  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
