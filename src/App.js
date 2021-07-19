import "./App.scss";
import CountriesContainer from "./components/countries-container/CountriesContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <CountriesContainer />
    </div>
  );
}

export default App;
