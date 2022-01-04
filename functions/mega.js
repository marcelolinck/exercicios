export function mega(quantidade = 6, numeros = []){

    let qtde = +quantidade

    if(qtde<6  && qtde > 60){
        throw "Quantidade inválida!"
    }
    if(numeros.length === qtde){
        //com o sort dessa forma, irá executar a ordenacao de forma crescente
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){

        // Usando o ... ele pega tudo o que tem dentro do Array e complementa com o novo dado
        return mega(qtde, [...numeros, numeroAleatorio])
    }else{
        return mega(qtde, numeros)
    }

}