function apareceTexto(email, senha){
    document.getElementById('cor').style.background = '#000000'
    document.getElementById('cor').style.color = '#FF0000'
    document.getElementById('cor').innerText = "Email: " + email + "\nSenha:\n " + senha
}

function getTexto(){
    event.preventDefault(); // impede que a página recarregue
    var email = document.getElementsByName('email')[0].value; //coleçoes de elementos
    var senha = document.getElementsByName('senha')[0].value; //caso deseje um unico elemento usar id

    
    //alert("E-mail: " + email + "\nSenha: " + senha);
    apareceTexto(email, senha)
    tabuada()
    
}

function tabuada () {
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            var tabuada = i * j;
            document.getElementById('cor').innerText += (i + " x " + j + " = " + tabuada + "\n");
        }
        document.getElementById('cor').innerText += "\n"; // quebra entre cada número da tabuada
    }
}

