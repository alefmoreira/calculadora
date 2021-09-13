'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=ope]');

let novoNum = true;
let operador;
let numeroAnterior;


const operacaoPendente = () => operador != undefined;

const calcular= () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent);
        novoNum = true;
        if(operador== '+'){
            atulaizarDisplay(numeroAnterior + numeroAtual);
        }

    }
}

const atulaizarDisplay = (texto) =>{
    if(novoNum){
        display.textContent = texto;
        novoNum = false;
    }else{
        display.textContent += texto;
    }
    }
    const inseririNumero = (evento) => atulaizarDisplay(evento.target.textContent);
    numeros.forEach (numero => numero.addEventListener('click', inseririNumero));

    const selecionarOperador = (evento) => {
        if(!novoNum){
        calcular();    
        novoNum = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
        }
    }
    operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));
