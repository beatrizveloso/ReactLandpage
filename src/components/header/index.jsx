import './styles.css'
import Logo from "../../img/logo.svg";
import Seta from "../../img/seta.svg";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo da compainha" />
            <nav>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href=""> 
                    <p>Link Four</p>
                    <img src={Seta} alt="Seta para baixo" />
                </a>
            </nav>
            <button>Try it for free</button>
        </header>
    )
}