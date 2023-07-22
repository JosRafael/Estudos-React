document.write("</br>Escolha seu pedido: </br>")
document.write("</br> 0 - Sorvete / 1- Suco </br>")
document.write("</br> 2 - Coca-Cola / 3- Agua Gelada </br></br>")


// Switch
function pedir(){
    x = prompt("O que deseja pedir?");

    switch (x) {
        case "0":
            alert("Voce pediu um sorvete");
            break;
        case "1":
            alert("Voce pediu um suco");
            break;
    
        case "2":
            alert("Voce pediu uma Coca-Cola");
            break;
    case "3":
            alert("Voce pediu uma Agua Gelada");
            break;
        default:
            alert("Ops, nao temos essa opcao!");
    }

}