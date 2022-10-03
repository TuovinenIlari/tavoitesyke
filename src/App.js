import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const [upheartlim, setUpheartlim] = useState(0);
  const [loheartlim, setLoheartlim] = useState(0);

  function calculateLimit() {
    setUpheartlim((220 - age) * 0.85);
    setLoheartlim((220 - age) * 0.65);
  }

  return (
    <div className="App">
      <form>
        <h2>Heart rate limits calculator</h2>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Heart rate limits
          </label>
          <output
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Heart rate limits"
          >
            {loheartlim.toFixed(0)}-{upheartlim.toFixed(0)}
          </output>
        </div>
        <button type="button" onClick={calculateLimit} class="btn btn-primary">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default App;
