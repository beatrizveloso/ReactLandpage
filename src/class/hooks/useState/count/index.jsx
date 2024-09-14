import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState (0)

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