import { useState } from "react/cjs/react.development"

export default function formumario(){
    
    const [valor, setValor] = useState("Inicial")
    function alterarInput(){
        setValor(valor+ "!")
    }
    return(
        <div style={{
            display: "flex",
            flexDirection: "Column"
        }}>

            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}