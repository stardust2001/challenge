// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listanNombres=[];

function agregarAmigo(){

var name=document.getElementById('amigo');
if (name.value.length==0){
    alert("llena el campo");
}
else{
    listanNombres.push(name.value)
    let elementoHTML = document.querySelector('#listaAmigos');
    elementoHTML.innerHTML = listanNombres;
    console.log(listanNombres);
    limpiarCaja()}


}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let numeroGenerado = Math.floor(Math.random() * listanNombres.length) ;
    console.log(numeroGenerado);
    let elementoHTML = document.querySelector('#resultado');
    console.log(listanNombres[numeroGenerado]);
    elementoHTML.innerHTML = listanNombres[numeroGenerado];

}

agregarAmigo();
sortearAmigo();
