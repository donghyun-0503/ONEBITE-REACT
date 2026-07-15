import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer.jsx";
import Button from "./components/Button";
import Header from "./components/Header.jsx";

const buttonProps = {
  text: "메일",
  color: "red",
  a: 1,
  b: 2,
  c: 3,
};

function App() {
  //부모 컴포넌트, App 컴포넌트는 Root 컴포넌트
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
