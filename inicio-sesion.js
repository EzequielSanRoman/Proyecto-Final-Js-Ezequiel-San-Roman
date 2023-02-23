const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const loginCorrecto = document.querySelector('#perfil-access')
const datosUsuario = {
    user: "ezequiel",
    password: "coder1234"
}

constSubirAlLs = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
        constSubirAlLs("login", true)
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        loginCorrecto.style.display = "block"
    
    } else {
        loginIncorrecto.style.display = "block"
        loginCorrecto.style.display = "none"
        inputUser.style.border = "1px solid red"
        inputPass.style.border = "1px solid red"
        swal ( "OOPS" ,  "ALGO SALIO MAL, POR FAVOR VERIFICA LOS DATOS INGRESADOS." ,  "error" )
    }
}

function validarLogin(clave) {
    if (clave !== true) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"
        loginCorrecto.style.display = "none"
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"
        loginCorrecto.style.display= "block"
    }
}

validarLogin(obtenerDelLs("login"))

logout.onclick = () => {
    localStorage.removeItem("login")
    validarLogin(obtenerDelLs("login"))
}


const cuentas = [
    {
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnCuenta: "$ 150.000.00",
        verMovimientos: "acreditación haberes"
    },
    {
        tipoDeCuenta: "Caja de Ahorro en Dolares",
        saldoEnCuenta: "$ 5.000",
        verMovimientos: "acreditación bonos"
    },
    {
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnCuenta: "$ 00.00",
        verMovimientos: ""
    },

]


const cuentasBancarias = document.querySelector(".cuentas");


function cuentasAHTML(cuentas) {
    for (let i = 0; i < cuentas.length; i++) {
        const productos = document.createElement("div");
        productos.className = "cuentas"
        productos.innerHTML = `
        <div>
            <h2>${cuentas[i].tipoDeCuenta}</h2>
            <p>Saldo: ${cuentas[i].saldoEnCuenta}</p>
            <p>Movimientos: ${cuentas[i].verMovimientos}</p>
            
        </div>
    `
        cuentasBancarias.appendChild(productos)

    }
}
cuentasAHTML(cuentas)
