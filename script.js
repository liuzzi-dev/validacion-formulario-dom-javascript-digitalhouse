const submitFunction = (event) => {
    validarFormulario();
    event.preventDefault(); // que se prevenga la actualizacion de la web
};

document.getElementById("formulario").addEventListener("submit", submitFunction); // escucha el envio del formulario

const validarFormulario = () => {

    //--- Campos de tipo texto ---//

    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach((campo) => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == 0) {
            mostrarError(errorCampo, "Este campo es requerido!");
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres!");
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    //--- Campo de tipo email ---//

    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        //-- Este regex valida que el formato del email es válido --//
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, "¡Ingrese un correo electrónico válido!");
        validacionCorrecta = false;
    }


    //--- Campo de tipo edad ---//
    const edad = document.getElementById("edad");
    const errorEdad = document.getElementById("errorEdad");

    if (/^(0|[1-9][0-9]?|1[01][0-9])$/.test(edad.value)) {
        if (/^(1[89]|[2-9]\d|\d{3,})$/.test(edad.value)) {
            ocultarError(errorEdad);
        } else {
            mostrarError(errorEdad, "¡Debe ser mayor a 18 años");
            validacionCorrecta = false;
        }
    } else {
        mostrarError(errorEdad, "¡Debe ingresar una edad válida!");
        validacionCorrecta = false;
    }

    //--- Campo de tipo Actividad ---//
    
    const actividad = document.getElementById("actividad");
    const errorActividad = document.getElementById("errorActividad");

    if (!actividad.value == '') {
        ocultarError(errorActividad);
    } else {
        mostrarError(errorActividad, "¡Debe seleccionar una actividad!");
        validacionCorrecta = false;
    }

    //--- Campo de tipo estudio ---//
    
    const nivelEstudio = document.getElementById("nivelEstudio");
    const errorNivelEstudio = document.getElementById("errorNivelEstudio");

    if (!nivelEstudio.value == '') {
        ocultarError(errorNivelEstudio);
    } else {
        mostrarError(errorNivelEstudio, "¡Debe seleccionar un nivel de estudio!");
        validacionCorrecta = false;
    }

    //--- Campo de términos y condiciones ---//

    const aceptoTerminos = document.getElementById("aceptoTerminos");
    const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, "¡Debes aceptar los terminos y condiciones!")
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

};

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = "";
    // elemento.style.display = "none";
};
