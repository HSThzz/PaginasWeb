


function criarLista(){

        this.tarefa = document.querySelector('.item-lista') 
        this.lista = document.querySelector('.lista-tarefas')

    this.salvarTarefas = () =>{
        const liTarefas = this.lista.querySelectorAll('li')
        const listaDeTarefas = []
        for(let tarefas of liTarefas){
            let tarefaTexto = tarefas.innerText
            tarefaTexto = tarefaTexto.replace('Apagar tarefa', '').trim()
            listaDeTarefas.push(tarefaTexto)
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas', tarefasJSON)
    }
    this.adicionaTarefasSalvas = () =>{
        const tarefas = localStorage.getItem('tarefas')
        const listaDeTarefas = JSON.parse(tarefas)

        for (let tarefa of listaDeTarefas){
            this.createLi(tarefa)
        }
    }

    this.clearInput = () =>{
        this.tarefa.value = ''
        this.tarefa.focus()
    }

    this.createBtn = (li) =>{
        const btn = document.createElement('button')
        btn.innerText = 'Apagar tarefa'
        li.appendChild(btn)

        btn.addEventListener('click', ()=>{
            li.remove()
            this.salvarTarefas()
        })
    }

    this.createLi = (tarefa) => {
        const li = document.createElement('li');
    
        // Usa o argumento passado, se existir. Caso contrário, pega do input.
        const texto = tarefa !== undefined ? tarefa : this.tarefa.value;
        li.innerText = texto;
    
        this.lista.appendChild(li);
        this.createBtn(li);
        this.clearInput();
        this.salvarTarefas();
    }
    

    this.deleteLi = (li) => {
        li.remove()
    }

    this.criarTarefa = () => { 

        this.adicionaTarefasSalvas()
        
        document.addEventListener('click', e => {
            const el = e.target
            if(el.classList.contains('add-tarefa')){
                if(this.tarefa.value != ''){
                this.createLi()
            }
                else{
                    alert('Não é possivel inserir uma tarefa vazia')
                }
            }
        })
    }

}

const lista = new criarLista()
lista.criarTarefa()
