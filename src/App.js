import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage path="/" element={<HomePage />} />
    </div>
  );
}

export default App;
