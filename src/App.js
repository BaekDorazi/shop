import logo from "./assets/logo512.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="screen">
          <span />
          <span />
          <span />
          <span />
          <img src={logo} />
        </div>

        <div class="container">
          <img src={logo} />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
