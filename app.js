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
        console.log("addNew Amigo");
        listaAmigosSecretos.push(nombreAmigo)
        limpiarcampo();
    } else {
        alert ("Por favor, inserte un nombre")
    }

}

function sortearAmigo() {
    console.log("sortear Amigo");
    
    cantidadAmigos = listaAmigosSecretos.length;

    if (cantidadAmigos >= 2) {
        let amigoAleatorio = Math.floor(Math.random()*cantidadAmigos);
        
        console.log(`Amigo Aleatorio: ${listaAmigosSecretos[amigoAleatorio]}`);

        listaAmigosSecretos.splice(amigoAleatorio, 1);
        mostarListaAmigos();
    } 
    
    if (cantidadAmigos < 2) {
        alert("Necesita un minimo de 2 amigos para sortear");
    }
}

function reiniciarJuego() {
    console.log("reiniciar Juego");
}


function limpiarcampo() {
    document.getElementById('amigo').value = '';
}

function mostarListaAmigos () {
    for (let i = 0; i < listaAmigosSecretos.length; i++) {
        console.log(listaAmigosSecretos[i]);
    }
}