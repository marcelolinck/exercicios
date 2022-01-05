import Pessoa from "../../components/Pessoa";

export default function exemploTS(){
    return(
        <div>
            <Pessoa nome="Marcelo" idade={37} />
            <Pessoa nome="Maria" />
         </div>
    )
}