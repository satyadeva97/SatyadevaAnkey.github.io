import './App.css';
import CheckComponent from "./components/check/checkComponent";
import NavbarComponent from "./components/navbar/navbarComponent";
import CarousalComponent from "./components/carousal/CarousalComponent";
import TitleComponent from "./components/title/titleComponent";
import ScrollComponent from "./components/scroll/ScrollComponent";
import AboutMeComponent from "./pages/About/AboutComponent";
import {Parallax} from 'react-parallax';
import Rotate from 'react-reveal/Rotate';
import Container from "react-bootstrap/Container";
import background from "./assets/img/parallax/background.webp"

function App() {
    return (
        <>
            <NavbarComponent/>
            <TitleComponent/>
            <CarousalComponent/>
            <div>
                <Parallax blur={10} bgImage={background}
                          bgImageAlt="the cat" strength={200}>

                    <div>
                        <Container className="container-box rounded">
                            <Rotate duration={500} Right>
                                <AboutMeComponent/>
                            </Rotate>
                        </Container>
                    </div>
                </Parallax>
            </div>

        </>
    );
}

export default App;
