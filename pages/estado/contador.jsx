
import { useState } from "react"
import NumeroDisplay from "../../components/indireta1/NumeroDisplay"


export default function contador(){
    
    const [numero, setNumero] = useState(0)

    const inc = ()=> {
        setNumero(numero + 1)
        
    }
    const dec = ()=> {
        setNumero(numero - 1)
        
    }   
    
    

    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection: "column",
        }}>
            <h1>Contador</h1>
            {/* <div>Valor: {numero}</div> */}
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </div>
    )

}