function onblur(nombre){
        // Validación de input utilizando expresiones regulares
        var regexNombre = /^[a-zA-Z\s]+$/; // Solo letras y espacios
        var regexEmail = /^\S+@\S+\.\S+$/; // Formato de correo electrónico
        var regexTelefono = /^\d{10}$/; // 10 dígitos

        // Obtener los valores de los inputs
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var telefono = $('#telefono').val();

        // Validar cada input y mostrar un mensaje de error si es necesario
        if (!regexNombre.test(nombre)) {
            alert('Por favor ingresa un nombre válido');
        } else if (!regexEmail.test(email)) {
            alert('Por favor ingresa un correo electrónico válido');
        } else if (!regexTelefono.test(telefono)) {
            alert('Por favor ingresa un número de teléfono válido');
        } else {
            alert('¡Formulario enviado!');
            $('#myForm')[0].reset(); // Limpiar el formulario
        }
    }