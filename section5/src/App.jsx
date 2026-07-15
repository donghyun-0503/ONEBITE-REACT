import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  //부모 컴포넌트, App 컴포넌트는 Root 컴포넌트

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
