import './App.css';
import CheckComponent from "./components/check/checkComponent";
import NavbarComponent from "./components/navbar/navbarComponent";
import CarousalComponent from "./components/carousal/CarousalComponent";
import TitleComponent from "./components/title/titleComponent";
import ScrollComponent from "./components/scroll/ScrollComponent";

function App() {
  return (
    <>
        <NavbarComponent />
        <TitleComponent />
        <CarousalComponent />
    </>
  );
}

export default App;
