/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = generarExcusa();
  console.log("Hello Rigo from the console!");
};

let generarExcusa = () => {
  let quien = ["mi perro", "mi abuela", "la tortuga", "mi pajaro"];
  let verbo = ["se comio", "boto", "aplasto", "rompio"];
  let que = ["mi tarea", "las llaves", "el carro", "mi telefono"];
  let cuando = [
    "antes de clase",
    "antes de dormir",
    "cuando termine",
    "durante el almuerzo",
    "mientras rezaba"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    que[queIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
