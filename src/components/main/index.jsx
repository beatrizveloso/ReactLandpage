import './styles.css'
import Img from "../../img/img-padrao";

export default function Main() {
    return (
        <main>
            <div>
                <h1>Resonate with the <br />visitor's problem</h1>
                <p>Describe exactly what your product or service does to solve this problem. <br />Avoid using verbose words or phrases.</p>
                <form>
                    <div>
                        <label for="uname">Enter your email </label>
                        <input type="text" id="uname" name="name" />
                    </div>
                    <div>
                        <button>Try for free</button>
                    </div>
                </form>
            </div>
            <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
            <div>
            <img src={Img} alt="Modelo de imagem corrompida" />
            </div>
        </main>
    )
}