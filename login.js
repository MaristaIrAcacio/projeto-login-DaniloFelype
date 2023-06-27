/*
Código de validação de formulario de login
*/
function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if(!email || !senha){
        alert("Campos de preenchumento obrigatório. Favor preencher");
    }else{
        alert("Campos preenchidos com sucesso!")
    }
}