

function calcula (tipo, valor){
 
    if (tipo == 'acao'){
        if(valor == 'c'){
            document.getElementById('resultado').value = ''
        }else if(valor == '='){
            resultado = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resultado
            
        }else{
            document.getElementById('resultado').value += valor
        }
        
    }else if (tipo == 'valor'){
        document.getElementById('resultado').value += valor
    }

}