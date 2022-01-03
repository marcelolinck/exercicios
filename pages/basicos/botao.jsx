function acao1() {
    console.log("acao1")
}



export default function botao() {

    function acao2() {
        console.log("acao2")
    }
    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function acao1() {
                console.log("acao3")
            }}>Click #03</button>
            <button onClick={() => console.log("click #04")}>Click #04</button>
            <button onClick={acao5}>Click #05</button>
            {/* Pegando o evento do botao */}
            <button onClick={e => acao5(e.altKey)}>Click #05 V2</button>
            
            {/* Chamando o console.log enquanto digita */}
            <div>
                <input type="text" onChange={e=>console.log(e.target.value)}/>
            </div>
        </div>
    )
}