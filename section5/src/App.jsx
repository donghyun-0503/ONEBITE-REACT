import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer.jsx";

function App() {
  //부모 컴포넌트, App 컴포넌트는 Root 컴포넌트
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
