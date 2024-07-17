import "./App.css";
import AppRouter from "./AppRouter";
import Home from "./Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App bg-[#e3e6e6]">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
