import { useEffect, useState } from "react"

export default function CountEffect() {

    const [count, setCount] = useState (0)
    useEffect(() => {
        console.log("useEffect ativado pela dependência count")
    },[count])
    // Forma tradicional

    function handleCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Ciick Aqui</button>
        </div>
    )
}