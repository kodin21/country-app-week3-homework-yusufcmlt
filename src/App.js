import "./App.scss";
import NavButton from "./components/nav-button/NavButton";

function App() {
  return (
    <div className="App">
      <NavButton icon="">Get All Countries</NavButton>
      <NavButton icon="">Check Statistics</NavButton>
    </div>
  );
}

export default App;
