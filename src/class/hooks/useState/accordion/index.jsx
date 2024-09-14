import './styles.css'
import { useState } from "react"; 
import { ArrowDown, ArrowUp }from "lucide-react"

export default function Accordion() {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>Novidades</p>
                {/* // Se estiver aberto é um ícone, caso fechado outro */}
                <button
                    onClick={ () => setIsOpen(!isOpen)}
                > {isOpen ? <ArrowUp /> : <ArrowDown/>}</button>
            </div>
            {/* // e-commercial pq eu n mostro nada caso estiver falso */}
            {isOpen && (
            <div className="accordion-content">
                <p>Sei fazer um accordion jsx com hook</p>
            </div>
            )}
        </div>
        )
}