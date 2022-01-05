//Dessa forma consigo importar uma classe default mesmo nao tendo colocado o nome dela, pois puxa diretamente o defauit. 
//O que tenho que fazer é somente nomear com um nome de acordo com a funÇão e chama-la conforme necessário
//Nome Quaquer

import Padrao, { Comp1 as Bla, Comp2, Comp4, Comp5, Comp6} from "../../components/modulo/funcionais"
// ------^---------Esse foi o nome qualquer
export  default function teste(){
    return(
        <div>
            <Bla />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legal !!!"/>
        </div>
    )
}