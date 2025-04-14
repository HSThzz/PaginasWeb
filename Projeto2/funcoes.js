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
    
}
