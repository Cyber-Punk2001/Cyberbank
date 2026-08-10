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

    mostrarFormularioCash();

});


// ======================================
// FORMULARIO CÓDIGO CASH
// ======================================

function mostrarFormularioCash() {

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
                step="0.01"
                required
            >

            <div class="botones-formulario">

                <button type="submit">
                    Continuar
                </button>

                <button
                    type="button"
                    id="btnCancelar"
                    class="btn-cancelar"
                >
                    Cancelar
                </button>

            </div>

        </form>

    `;


    // Capturar formulario

    const formulario =
        document.getElementById("formCash");


    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        validarCash();

    });


    // Botón cancelar

    document
        .getElementById("btnCancelar")
        .addEventListener("click", function() {

            mostrarMenu();

        });

}


// ======================================
// VALIDAR CÓDIGO CASH
// ======================================

function validarCash() {

    const identificacion =
        document.getElementById("identificacion").value.trim();

    const codigo =
        document.getElementById("codigo").value.trim();

    const monto =
        parseFloat(document.getElementById("monto").value);


    // Validar identificación

    if (identificacion === "") {

        alert("Ingrese su número de identificación.");

        return;

    }


    // Validar código

    if (codigo === "") {

        alert("Ingrese el código de retiro.");

        return;

    }


    // Validar monto

    if (isNaN(monto) || monto <= 0) {

        alert("Ingrese un monto válido.");

        return;

    }


    // Mostrar confirmación

    mostrarConfirmacion(
        identificacion,
        codigo,
        monto
    );

}


// ======================================
// CONFIRMACIÓN
// ======================================

function mostrarConfirmacion(
    identificacion,
    codigo,
    monto
) {

    contenido.innerHTML = `

        <div class="confirmacion">

            <h1>Confirmar operación</h1>

            <p>
                Revise los datos antes de continuar.
            </p>

            <div class="resumen">

                <p>
                    <strong>Identificación:</strong>
                    ${identificacion}
                </p>

                <p>
                    <strong>Código de retiro:</strong>
                    ${codigo}
                </p>

                <p>
                    <strong>Monto:</strong>
                    RD$ ${monto.toFixed(2)}
                </p>

            </div>


            <div class="botones-confirmacion">

                <button
                    id="btnConfirmar"
                    class="btn-confirmar"
                >
                    Confirmar
                </button>

                <button
                    id="btnRegresar"
                    class="btn-cancelar"
                >
                    Regresar
                </button>

            </div>

        </div>

    `;


    // Confirmar

    document
        .getElementById("btnConfirmar")
        .addEventListener("click", function() {

            mostrarResultado();

        });


    // Regresar

    document
        .getElementById("btnRegresar")
        .addEventListener("click", function() {

            mostrarFormularioCash();

        });

}


// ======================================
// RESULTADO
// ======================================

function mostrarResultado() {

    contenido.innerHTML = `

        <div class="resultado">

            <div class="icono-exito">
                ✓
            </div>

            <h1>Operación procesada</h1>

            <p>
                Esta es una simulación educativa.
            </p>

            <p>
                No se realizó ninguna transacción real.
            </p>

            <button
                id="btnVolverMenu"
                class="btn-confirmar"
            >
                Volver al menú
            </button>

        </div>

    `;


    document
        .getElementById("btnVolverMenu")
        .addEventListener("click", function() {

            mostrarMenu();

        });

}


// ======================================
// VOLVER AL MENÚ
// ======================================

function mostrarMenu() {

    contenido.innerHTML = `

        <h1>Bienvenido</h1>

        <p>
            Seleccione una operación del menú.
        </p>

    `;

}