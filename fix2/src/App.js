import "./App.css";
import { useState } from "react";
import useArray from "./hooks/useArray";

function App() {
  const [array, setLastActivitie] = useArray();
  const [activitie, setActivitie] = useState("");
  return (
    <div className="App">
      <h3>Simple List</h3>
      <input type="text" onChange={(e) => setActivitie(e.target.value)} />
      <button onClick={() => setLastActivitie(activitie)}>Adicionar</button>
      <section>
        {array.map((item) => (
          <p>{item}</p>
        ))}
      </section>
    </div>
  );
}

export default App;
