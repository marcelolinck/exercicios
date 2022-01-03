export default function Filho(props) {
    return (
        <div>
            <h1>Filho #01</h1>
            {/* Dessa forma nao eh passado nenhuma informacao ao pai ha nao ser o evento do click*/}
            <button onClick={props.funcao}>Falar com o Pai</button>
            {/* Dessa forma passa o parametro para o pai de forma indireta*/}
            <button onClick={()=>props.funcao("Passei no ENEM", "Uhuuuuuu")}>Falar com o Pai</button>
        </div>
    )
}