const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");

const btnTransacciones =
    document.getElementById("btnTransacciones");

const btnCash =
    document.getElementById("btnCash");

const contenido =
    document.getElementById("contenido");


// ======================================
// ABRIR TRANSACCIONES
// ======================================

btnTransacciones.addEventListener("click", function () {

    inicio.classList.add("oculto");

    menu.classList.remove("oculto");

});


// ======================================
// ABRIR CÓDIGO CASH
// ======================================

btnCash.addEventListener("click", function () {

    contenido.innerHTML = `

        <h1>Código CASH</h1>

        <form id="formCash">

            <label>
                Número de identificación
            </label>

            <input
                type="text"
                id="identificacion"
                placeholder="Ingrese su identificación"
                required
            >

            <label>
                Código de retiro
            </label>

            <input
                type="text"
                id="codigo"
                placeholder="Ingrese el código de retiro"
                required
            >

            <label>
                Monto
            </label>

            <input
                type="number"
                id="monto"
                placeholder="Ingrese el monto"
                min="1"
                required
            >

            <button type="submit">
                Continuar
            </button>

        </form>

    `;

});