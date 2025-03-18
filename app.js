// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

listaAmigos = document.getElementById('listaAmigos');
resultado = document.getElementById('resultado')


listaAmigosSecretos = [];

function agregarAmigo() {
    console.log("addNew Amigo");

    nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo ==! '') {
        listaAmigosSecretos.push(nombreAmigo)
    } else {
        alert ("Debe Ingresar un Nombre")
    }

}

function sortearAmigo() {
    console.log("sortear Amigo");

    for (let i = 0; i < listaAmigosSecretos.length; i++) {
        console.log(listaAmigosSecretos[i]);
    }
}

function reiniciarJuego() {
    console.log("reiniciar Juego");
}