import "./App.scss";
import CountriesContainer from "./components/countries-container/CountriesContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <div className="app__background"></div>
      <Header />
      <CountriesContainer />
    </div>
  );
}

export default App;
