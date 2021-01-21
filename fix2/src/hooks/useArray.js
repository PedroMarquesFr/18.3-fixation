import { useState, useEffect } from "react";

function useArray() {
  const [lastActivitie, setLastActivitie] = useState("");
  const [array, setArray] = useState([]);
  console.log("sdas")

  useEffect(() => setArray([...array, lastActivitie]), [lastActivitie]);
  return [array, setLastActivitie];
}

export default useArray;
