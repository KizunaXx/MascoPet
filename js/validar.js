// Funcion para el despliege de "Crear Cuenta"
$('.toggle').click(function() {
    $('.forma').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    })
});
//Funcion para validar datos de inicio de sesion
(function() {

    var login = document.getElementsByName('iniciarSesion')[0],
        elementos = login.elements,
        boton = document.getElementById('btn');

    var validarUsuario1 = function(e) {
        if (login.usuario1.value == 0) {
            alert("Ingresar Usuario");
            e.preventDefault();
        }

    };

    var validarPass = function(e) {
        if (login.clave.value == 0) {
            alert("Ingresar Contraseña")
            e.preventDefault();
        }
    };

    var validar = function(e) {
        validarUsuario1(e);
        validarPass(e);
    };

    login.addEventListener("submit", validar);
}())

//Funcion para validar datos de "Crear Cuenta"

(function() {

    var formulario = document.getElementsByName('formulario')[0],
        elementos2 = formulario.elements,
        boton2 = document.getElementById('btn2');

    var validarUsuario2 = function(e) {
        if (formulario.usuario.value == 0) {
            alert("Ingrese un nombre de Usuario");
            e.preventDefault();
        }
    }

    var validarEmail = function(e) {
        if (formulario.email.value == 0 || formulario.email.value == null) {
            alert("Ingrese un Correo Electronico");
            e.preventDefault();
        }
    }
    var validarPasswd = function(e) {
        if (formulario.clave.value == 0) {
            alert("Ingrese una Contraseña");
            e.preventDefault();
        }
    }

    var validarPasswd2 = function(e) {
        if (formulario.confir_clave.value != formulario.clave.value) {
            alert("Las Contraseñas ingresadas no coinciden");
            e.preventDefault();
        }
    }




    var validar2 = function(e) {
        validarUsuario2(e);
        validarEmail(e);
        validarPasswd(e);
        validarPasswd2(e);

    }

    formulario.addEventListener("submit", validar2)

}())