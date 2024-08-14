import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from './App.jsx';
import store from './store/store.ts';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// @ts-check

/**
 * Nombre de usuario
 * @type {string}
 */
let userName= "Lucia"

/**
 * Edad del usuario
 *  @type {number}
 */

let userAge= 28

/**
 * Lista de edades de usuarios
 *  @type {Array<Number>}
 */

const usersAge= [20,23,24,34]

/**
 * Lista de valores
 *  @type {Array<Number|String|Boolean>}
 */

const mixedArray= [42, "hola", true]

/**
 * Usuario
 * @type {{id: Number, name: String, age: Number, isActive: Boolean}}
 */

const user= {
    id: 1,
    name: "Lucia",
    age: 28,
    isActive: true
}


//otra forma, es crear un "objeto custom"
/**
 *  @typedef {object} User
 *  @property {number} id este es el id del usuario
 *  @property {string} name este es el nombre de usuario
 *  @property {number} age indica la edad del usuario
 *  @property {boolean} isActive esto indica si esta activo o no el usuario
 */
const user1= {
    id: 2,
    name: "Lucia",
    age: 28,
    isActive: true
}

/**
 *  @type {User}
 */
const user2= {
    id: 2,
    name: "Lucia",
    age: 28,
    isActive: true
}

/**
 * Imprime por consola un saludo al usuario con su nombre
 * @param {User} user
 * @returns {void}
 * @example
 * sayHello(user)
 */
function sayHello (user) {
    console.log(`Hola ${user.name}`) 
}

/**
 * @function
 * @param {Array<Number>} numbers - el array de numero a filtrar
 * @returns {number []} un nuevo array con los numeros pares
 */
function filterEvenNumbers (numbers) {
    return numbers.filter(number => number % 2 === 0);
}

/**
 * @async
 * @function
 * @param {string} url La URL del servidor remoto
 * @returns {Promise<object>} Los datos obtenidos del servidor
 * @throws {Error} si la solicitud del servidor falla
 */
async function fetchData (url) {
    const response = await fetch(url);

    if (response.ok) {
        throw new Error ('Fallo al obtener los datos del servidor')
    }

    return response.json()
}

