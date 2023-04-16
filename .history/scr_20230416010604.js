function onBlur(){
        // Validación de input utilizando expresiones regulares
        var regexNombre = /^[a-zA-Z\s]+$/; // Solo letras y espacios
        var regexEmail = /^\S+@\S+\.\S+$/; // Formato de correo electrónico
        var regexTelefono = /^\d{10}$/; // 10 dígitos

        // Obtener los valores de los inputs
        var nombre = document.getElementById("nombre1").Value;
        var email = document.getElementById("email1").Value;
        var telefono = document.getElementById("telefono1").Value;

        // Validar cada input y mostrar un mensaje de error si es necesario
        if (!regexNombre.test(nombre)) {
            alert('Por favor ingresa un nombre válido');
            return false     
        } else if (!regexEmail.test(email)) {
            alert('Por favor ingresa un correo electrónico válido');
            return false
        } else if (!regexTelefono.test(telefono)) {
            alert('Por favor ingresa un número de teléfono válido');
            return false
        } else {
            alert('¡Formulario enviado!');
            $('#myForm')[0].reset(); // Limpiar el formulario
        }
    }