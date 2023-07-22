//funçao entrar
function entrar(){
    var area=document.getElementById("area");
    var texto = prompt("Qual o seu nome?");


    if(texto == '' || texto==null){
        alert("Digite seu nome novamente");
        area.innerHTML = "Bem vindo ...";
    }else{
        area.innerHTML = "Bem vindo " + texto;
    }   
}
function entrar2(nome){
    var area=document.getElementById("area2");
    var texto = prompt("Qual o seu sobrenome?");

    if(texto == '' || texto==null){
        alert("Digite seu nome novamente");
        area.innerHTML = "Bem vindo ...";
    }else{
        area.innerHTML = nome + " " + texto;
    }  
}
function entrar3(nome, texto){
    var area=document.getElementById("area3");
    var idade = prompt("Qual a sua idade?");

    area.innerHTML = nome + " " + idade;
}