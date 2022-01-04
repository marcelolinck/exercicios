import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/indireta1/NumeroDisplay.jsx"
import { mega } from "../../functions/mega.js"

export default function megasena(){
    
    const [qtde, setQtde] = useState(6)
    //Dessa forma colocando a funca megaS dentro do useState, fara com que tenha um valor inicial
    const [numeros, setNumeros] = useState([])
    

    //Dessa forma evita o erro de warning e tambem gera a funcao somente 1 vez e depois de executar novamente quando clicar no botao gerar Aposta
    useEffect(() =>{
        setNumeros(mega())
        },[])

    function rendenizarNumeros(){
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }
    
    return(
        <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <h1>MEGA SENA</h1>
            <div style={{
                display: "flex",
                justifyContent:"center",
                flexWrap: "wrap",
            }}>
                {rendenizarNumeros()}

            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={ev => setQtde(ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    )
}