// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSecretos = [];
let cantidadAmigos = 0;

let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo !== '') {
        //Verificar que el nombre no  inicie con número
        //Verificar que no se repita en la lista de amigos
        listaAmigosSecretos.push(nombreAmigo);
        limpiarcampo();

        let itemNombreAmigo = document.createElement("li");
        itemNombreAmigo.classList.add('name-list-item');
        itemNombreAmigo.id = `item-${nombreAmigo}`;
        itemNombreAmigo.innerText = nombreAmigo;
        listaAmigos.appendChild(itemNombreAmigo);

    } else {
        alert ("Por favor, inserte un nombre")
    }

}

function sortearAmigo() {
    limpiarcampo();

    cantidadAmigos = listaAmigosSecretos.length;

    if (cantidadAmigos >= 2) {
        let amigoAleatorio = Math.floor(Math.random()*cantidadAmigos);

        resultado.innerHTML = `<li id="nombre-amigo-secreto">${listaAmigosSecretos[amigoAleatorio]}</li>`;

        let item = document.getElementById(`item-${listaAmigosSecretos[amigoAleatorio]}`);
        listaAmigos.removeChild(item);

        listaAmigosSecretos.splice(amigoAleatorio, 1);
    } 
    
    if (cantidadAmigos < 2) {
        alert("Necesita un minimo de 2 amigos para sortear");
    }
}

function reiniciarJuego() {
    listaAmigosSecretos = [];
    cantidadAmigos = 0;
    listaAmigos.innerHTML = "";
    limpiarcampo();
    
}


function limpiarcampo() {
    document.getElementById('amigo').value = '';
    resultado.innerHTML = "";
}