import { useState } from "react";
import reactLogo from "../assets/images/favicon-32x32.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Jessica Randall</h1>
        <h2>London, United Kingdom</h2>
        <h3>Front-end developer and avid reader.</h3>

        <div>GitHub</div>
        <div>Frontend Mentor</div>
        <div>LinkedIn</div>
        <div>Twitter</div>
        <div>Instagram</div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Nico Rithner</a>.
        </div>
      </div>
    </>
  );
}

export default App;
