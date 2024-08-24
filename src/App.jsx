
// function Filho({children}) {
//     return <div className="filho">
//         {children}
//     </div>
// }
// uso da prop tipo number

import React from "react"

// function Filho({ idade }) {
//     return <p>{idade}</p>
// }

function Filho({approved}) {
    return (
    <>
        {approved ? <img src="https://w7.pngwing.com/pngs/400/997/png-transparent-emoji-doing-thumbs-up-illustration-emoji-emoticon-smiley-like-button-thumb-signal-double-happiness-computer-icons-text-messaging-smile.png" alt="Emoji Feliz" /> : <img src="https://t4.ftcdn.net/jpg/00/86/18/25/360_F_86182546_Gy93hyoCFXmK0JlXYnOekv05v66MUmfb.jpg" alt="Emoji Triste" />}
    </>
);
}

// isso é verdadeiro ? retorno:(se não) retorno

export default function App() {
        return <Filho approved/>;

    }