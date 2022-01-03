import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="João" familia={props.familia} />
            <Filho nome="Marcelo" familia={props.familia} />
            {/* Usando o operador spread */}
            <Filho {...props} nome="Marcelo2" />
        
        </div>
    )
}