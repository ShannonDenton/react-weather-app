import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project is coded by{" "}
          <a
            href="https://shannon-denton.com/"
            target="_blank"
            rel="noreferrer"
          >
            Shannon Denton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ShannonDenton/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
