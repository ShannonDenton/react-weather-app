import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          {" "}
          This project is coded by{" "}
          <a href="https://shannon-denton.com/" target="_blank">
            Shannon Denton
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ShannonDenton/react-weather-app"
            target="_blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
