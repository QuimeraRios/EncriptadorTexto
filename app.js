/*Este app sera para encriptar y desencriptar un texto
se tienen varias condiciones a cumplir:
Las "llaves" de encriptación que se utilizan 
                        son las siguientes:

                        La letra "e" es convertida para "enter"
                        La letra "i" es convertida para "imes"
                        La letra "a" es convertida para "ai"
                        La letra "o" es convertida para "ober"
                        La letra "u" es convertida para "ufat"

                        Requisitos:
                        Debe funcionar solo con letras minúsculas
                        No deben ser utilizados letras con acentos 
                        ni caracteres especiales
                        Debe ser posible convertir una palabra para la versión encriptada
                        también devolver una palabra encriptada para su versión original.*/

let textoSecreto = document.querySelector('h1');
//input(`Escribe aqui el texto a Encriptar: `);
//se revisa la longitud del texto
let longitudTexto=textoSecreto.length;
console.log(longitudTexto);
console.log(textoSecreto);
cumpleCondicion='False';

function verificarTexto(textoSecreto) {
    let tieneMayusculas = /[A-Z]/.test(textoSecreto);
    let tieneEspeciales = /[^a-zA-Z0-9]/.test(textoSecreto);
    if (tieneMayusculas || tieneEspeciales){
        cumpleCondicion='True';
    }

    if (tieneMayusculas || tieneEspeciales) {
        console.log("La cadena contiene mayúsculas o caracteres especiales.");
        return cumpleCondicion;
} 

//funcion que cambie las vocales por los valores indicados
function modificarTexto(textoSecreto){
    let textoModificado = textoSecreto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    console.log("Texto modificado:", textoModificado);
} 
    
// Proceso inverso
function recuperarTexto(textoModificado){
    let textoOriginal = textoModificado.replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
    console.log("Texto original:", textoOriginal);
    return textoModificado, textoOriginal;
}
  
}

let textoIngresado = prompt("Ingrese un texto:");
verificarTexto(textoIngresado);

function generarEncriptacion(){
    let largoTexto=textoSecreto.length;
    for (var i=0; i < largoTexto; i++) {
        console.log(textoSecreto[i]);
      }
    //console.log(numeroGenerado);
    console.log(textoSecreto);
    j=0;
    //si ya sorteamos todos los numeros
    if (largoTexto==j){
        //asignarTextoElemento('p','ya se asignaron todos los numeros');
        asignarTextoElemento('p','el texto ha sido analizado ');
    } else {
        //si el numero esta incluido en la lista

        if (textoSecreto[j].includes(e)){
            cambioe[j]=textoSecreto[j]

            return generarEncriptacion();
        } else {
            listaNumerosSorteados.push(textoEncriptado);
            return textoEncriptado;
        }
    }
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    
}

verificarTexto();
generarEncriptacion();
verificarIntento();