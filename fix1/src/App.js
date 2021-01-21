import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [randNumber, setRandNumber] = useState(0);
  const [isPrime, setIsPrime] = useState(false);
  useEffect(() => {
    const interval = setInterval(function () {
      setRandNumber(Math.floor(Math.random() * 100));
    }, 10000);
    console.log("renderizou");
    return ()=>clearInterval(interval);
  }, []);

  useEffect(() => {
    if (randNumber % 3 === 0 || randNumber % 5 === 0) {
      setIsPrime(true);
      setTimeout(() => {
        setIsPrime(false);
      }, 4000);
      console.log("entrou");
    }
  }, [randNumber]);
  return (
    <div className="App">
      <span>{randNumber}</span>
      {isPrime && <span>Acerto</span>}
    </div>
  );
}

export default App;
