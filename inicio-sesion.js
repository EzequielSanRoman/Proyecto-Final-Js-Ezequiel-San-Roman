const $btnSignIn = document.querySelector('.sign-in-btn')
const $btnSignUp = document.querySelector('.sign-up-btn')
const $signUp = document.querySelector('.sign-up')
const $signIn = document.querySelector('.sign-in')

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});






// login
const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const loginCorrecto = document.querySelector('#perfil-access')
const datosUusario = {
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
    if (inputUser.value === datosUusario.user && inputPass.value === datosUusario.password) {
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



// Registración.

const formulario = document.querySelector('.formulario-sign-up'),
    inputs = document.querySelectorAll('.formulario-sign-up input'),
    sign_in_container = document.querySelector('.sign-in-container'),
    sign_up_container = document.querySelector('.sign-up-container');


document.addEventListener('click', e => {
    if (e.target.matches('.ok-account')) {
        sign_in_container.style.display = 'block';
        sign_up_container.style.display = "none";
       
    } else if (e.target.matches('.no-account')) {
        sign_up_container.style.display = "block";
        sign_in_container.style.display = "none";
     
    }
})

const expresiones_regulares = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    name: false,
    password: false,
    email: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones_regulares.nombre, e.target.value, 'name');
            break;
        case "email":
            validarCampo(expresiones_regulares.email, e.target.value, 'email')
            break;
        case "password":
            validarCampo(expresiones_regulares.password, e.target.value, 'password')
            break;
        default:
            break;
    }
}

validarCampo = (expresion, input, campo) => {
    if (expresion.test(input)) {
        console.log('Los datos ingresados son admitidos')
        campos[campo] = true;
    } else {
        console.log('Los datos ingresados no son admitidos')
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    if (campos.name && campos.password && campos.email) {
        swal ( {
            title:"¡Genial", 
        text: "Ya pediste tu cuenta NMB, te enviaremos un mail para finalizar el alta de tu cuenta.",
        icon: "success",
        button: "Genial" 
        })

        setTimeout(() => {
            document.querySelector('.check_notify').classList.remove('active');
        }, 5000);
    } else {
        swal ( {
            title:"¡OOPS!", 
        text: "Los datos estan mal, por favor cargalos nuevamente",
        icon: "error",
        button: "error" 
        })
    }
})  

