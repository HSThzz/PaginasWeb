
//constructor para criar cpf
export function CriaCpf(numero){
    this.cpf = String(numero).split('').map(Number)
}

//valida se o cpf passado é valido
export function validaCpf(cpfOriginal, cpfParaValidaçao, tamanho){
   for (let i = 0; i < tamanho; i++) {
    if (cpfOriginal[i] !== cpfParaValidaçao[i]) {
        return console.log("CPF incorreto");
    }
}
    console.log("CPF validado");
}

//calcula o primeiro digito do cpf e retorna a primeira parte do cpf a ser validado
export function getPrimeiroDigito(cpfOriginal, tamanho){

    let i = tamanho - 1
    let cpf1 = cpfOriginal.slice(0, tamanho -2)
    let soma = 0

    for(let valor of cpfOriginal){
        soma += valor * i
        i--
        if(i < 2){
            break
        }
    }
        let primeiroDigito
        primeiroDigito = tamanho - (soma%tamanho)

        if(primeiroDigito > 9){
            primeiroDigito = 0
            cpf1.push(primeiroDigito)
            //console.log(cpf1)
            
        }else{
            cpf1.push(primeiroDigito)
            //console.log(cpf1)
        }
    return cpf1
}

//calcula o segindo digito do cpf e retorna o cpf completo a ser validado
export function getSegundoDigito(cpfPrimeiroDigito, tamanho){
    let soma = 0
    let j = tamanho
    for(let valor of cpfPrimeiroDigito){
        soma += valor * j
        j--
        if(j < 2){
            break
        }
    }
    let segundoDigito
        segundoDigito = tamanho - (soma%tamanho)

        if(segundoDigito > 9){
            segundoDigito = 0
            cpfPrimeiroDigito.push(segundoDigito)
            //console.log(cpfPrimeiroDigito)
            
        }else{
            cpfPrimeiroDigito.push(segundoDigito)
            //console.log(cpfPrimeiroDigito)
        }
    return cpfPrimeiroDigito
}

//funcao que realiza a validaçao do cpf 
export function Valida(CpfArray){

    const tamanho = 11
    
    let cpfSemiValidado = getPrimeiroDigito(CpfArray, tamanho)

    let cpfFinal = getSegundoDigito(cpfSemiValidado, tamanho)

    validaCpf(CpfArray, cpfFinal, tamanho)
    
}