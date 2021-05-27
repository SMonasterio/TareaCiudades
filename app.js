/*Ciudades
----------------------------------
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado,
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

//---------------------------------------------------------------------------------------------------------------------
//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo
let listaCiudades = ["BUENOS AIRES", "LIMA", "LONDRES"];

function nuevaCiudad() {
  let ciudad = prompt("Ingrese una ciudad");
  if (ciudad !== "0" && null) {
    listaCiudades.push(ciudad.trim().toUpperCase());
    console.log(`${ciudad} ha sido añadida a la lista`);
  } else {
    for (let i = 0; i < listaCiudades.length; i++) {
      console.log(`${i + 1} - ${listaCiudades[i]}`);
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------
//Mostrar la longitud del arreglo.

function longitud() {
  console.log(`Su lista tiene: ${listaCiudades.length} ciudades`);
}

//------------------------------------------------------------------------------------------------------------------------
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

function mostrarPosicion() {
  let primero = listaCiudades [0]
  let tercero = listaCiudades [2]
  let ultimo = listaCiudades[listaCiudades.length -1]
  
  console.log(`${primero}. ${tercero}, ${ultimo}`)
  
}

//-------------------------------------------------------------------------------------------------------------------------
//Añade en última posición la ciudad de París.

function añadirParis() {
  let paris = listaCiudades.push('PARIS')
  console.log(`${listaCiudades}`)
}

//---------------------------------------------------------------------------------------------------------------------------
//Escribe por pantalla el elemento que ocupa la segunda posición.

function segundaPos() {
  let segunda =listaCiudades[1]
  document.write(`La segunda posicón es ${segunda}`)  
}

//---------------------------------------------------------------------------------------------------------------------------
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

function barcelona() {
  listaCiudades.splice(1, 1, 'BARCELONA')  
}