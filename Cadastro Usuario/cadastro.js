class Cpf{

    constructor(){
        this.cpf = document.getElementById('cpf').value.replace(/\D+/g, '').split('').map(Number);

        this.tamanho = 11
    }

    validaCpf(cpfOriginal, cpfParaValidaçao, tamanho){
    for (let i = 0; i < tamanho; i++) {
    if (cpfOriginal[i] !== cpfParaValidaçao[i]) {
        return false;
            }
        }
        return true
    }
    getPrimeiroDigito(cpfOriginal, tamanho){
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
    getSegundoDigito(cpfPrimeiroDigito, tamanho){
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

    Valida(){

    const tamanho = 11
    
    let cpfSemiValidado = this.getPrimeiroDigito(this.cpf, tamanho)

    let cpfFinal = this.getSegundoDigito(cpfSemiValidado, tamanho)

    return this.validaCpf(this.cpf, cpfFinal, tamanho)
    
}

}

class Cadastro extends Cpf{
    constructor(){
        super()
        this.nome = document.getElementById('nome').value
        this.sobrenome = document.getElementById('sobrenome').value
        this.usuario = document.getElementById('usuario').value
        this.senha = document.getElementById('senha').value
    }
    validaNome(){
        const pai = document.querySelector('.container-nome')

        const erroVazio = document.querySelector('.erro-n')
        if(erroVazio) this.removeErro(erroVazio)

        if(this.nome == ''){

            const erro = document.createElement('p')
            erro.innerText = 'Nome nao pode estar vazio'
            erro.classList.add('erro-n') // para identificar o erro no futuro
            pai.appendChild(erro)
            return
        }
    
    }

    validaSobrenome(){
        const pai = document.querySelector('.container-sobrenome')

        const erroVazio = document.querySelector('.erro-so')
        if(erroVazio) this.removeErro(erroVazio)

        if(this.sobrenome == ''){

            const erro = document.createElement('p')
            erro.innerText = 'Sobrenome nao pode estar vazio'
            erro.classList.add('erro-so') // para identificar o erro no futuro
            pai.appendChild(erro)
            return
        }
    
    }
    validaCpfInterno(){
        const pai = document.querySelector('.container-cpf')

        const erroVazio = document.querySelector('.erro-c')
        if(erroVazio) this.removeErro(erroVazio)

        const errocpf = document.querySelector('.erro-cpf')
        if(errocpf)this.removeErro(errocpf)

        
        if(this.cpf == ''){

            const erro = document.createElement('p')
            erro.innerText = 'Cpf nao pode estar vazio'
            erro.classList.add('erro-c') // para identificar o erro no futuro
            pai.appendChild(erro)
            return
        }
        if(!this.Valida()){
            const erro = document.createElement('p')
            erro.innerText = 'Cpf inexistente'
            erro.classList.add('erro-cpf') // para identificar o erro no futuro
            pai.appendChild(erro)
            return
        }
    }
    validaUsuario(){
        const pai = document.querySelector('.container-usuario')
        
        const erroVazio = document.querySelector('.erro-u')
        if(erroVazio) this.removeErro(erroVazio)
        const erroLetras = document.querySelector('.erro-u2')
        if(erroLetras) this.removeErro(erroLetras)


        if(this.usuario == ''||this.usuario.length < 3 || this.usuario.length > 12){
            const erro = document.createElement('p')
            erro.innerText = 'Usuário deve ter entre 3 e 12 caracteres'
            erro.classList.add('erro-u') // para identificar o erro no futuro
            pai.appendChild(erro)
        }
        
            // Verifica se só contém letras e números
        if(!/^[a-zA-Z0-9]+$/.test(this.usuario)){
            const erro = document.createElement('p')
            erro.innerText = 'Usuário só pode conter letras e/ou números'
            erro.classList.add('erro-u2')
            erro.style.color = 'red'
            pai.appendChild(erro)
        }
    }
    validaSenha(){
        const pai = document.querySelector('.container-senha')

        const erroVazio = document.querySelector('.erro-s')
        if(erroVazio) this.removeErro(erroVazio)

        if(this.senha == '' || this.senha.length < 6 || this.senha.length > 12){

            const erro = document.createElement('p')
            erro.innerText = 'Senha deve ter entre 6 e 12 letras'
            erro.classList.add('erro-s') // para identificar o erro no futuro
            pai.appendChild(erro)
            return
        }

    }

    removeErro(erro){
        erro.remove()
    }
    executa(){
        this.validaNome()
        this.validaSobrenome()
        this.validaCpfInterno()
        this.validaUsuario()
        this.validaSenha()
    }
   
}

function cadastro(){
        document.addEventListener('click', (e)=>{
        const el = e.target
        if(el.classList.contains('botao')){
            const p1 = new Cadastro()
            console.log(p1)
            p1.executa()
        }    
        })
    }
cadastro()