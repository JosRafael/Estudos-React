// Temporizador
function acao(){
    document.write("Executando...</br>");
}
// Executa em tempo real
var timer = setInterval(acao, 1000);
clearInterval(timer);



// setTimeout(acao, 3000);