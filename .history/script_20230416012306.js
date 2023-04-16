function enviarConsulta() {
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  var asunto = document.getElementById("subject").value;
  var mensaje = document.getElementById("message").value;
  if (nombre != "" && correo != "" && asunto != "" && mensaje != "") {
    return alert(
      "Estimado " +
        nombre +
        ": \nSu mensaje \n" +
        asunto +
        "\n" +
        mensaje +
        "\nFue recibido correctamente. \nEn breve recibida la respuesta en su mail\n" +
        correo +
        ""
    );
  } else {
    alert("Tienes que completar todos los campos");
  }
}

function codigoDesc() {
  var letras = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var codigo = "";

  for (var i = 0; i < 6; i++) {
    var digito = Math.floor(Math.random() * letras.length);
    //   var digito = Math.random() * letras.length;
    codigo += letras[digito];
  }
  alert("Su cupón de descuento es: \n\n" + codigo);
  document.getElementById('Cupon').innerHTML= ``codigo`sdsdsd`;
}

function suscribe() {
  correo = prompt("ingrese su correo");
  if (/^\S+@\S+\.\S+$/ .test(correo)) {
    alert("¡Su correo \n" + correo + " \nfue registrado exitosamente!");
    codigoDesc();
  } else {
    alert(
      "Error: \nIngrese una dirección valida. \nPor favor, inténtelo de nuevo."
    );
  }
}

function mailOnblur(){
mail = document.getElementsByName("email");
  if (/[@]/.test(mail)) {
    return;
  }else{alert("no digas mamadas mery jane")}
}
/*
  // wizard
  $(function(){
    $("#form-container").formwizard({
      formPluginEnabled: true,
      validationEnabled: true,
      focusFirstInput : true,
      formOptions: {
        success: function(data){
          alert("Formulario enviado correctamente!");
        },
        beforeSubmit: function(data){
          alert("Formulario enviado!");
        },
        dataType: 'json',
        resetForm: true
      },
      textSubmit: 'Enviar',
      disableUIStyles: true,
      showSteps: true,
      showProgressBar: true,
      next: "Siguiente",
      back: "Anterior"
    });
  });*/

//Formulario Wizard
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function (event) {
  showTab(currentTab);
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n != x.length - 1) {
    document.getElementById("imprimir").style.display = "none";
  } else {
    document.getElementById("imprimir").style.display = "inline";
  }
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 2) {
    document.getElementById("nextBtn").innerHTML = "Finalizar";
  } else if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Enviar pedido";
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("finalizar").style.display = "block";
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += "invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

$("#regForm").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  }
});

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

$(document).ready(function () {
  $("#imprimir").click(function () {
    $(
      "#nombre, #apellido, #email, #telefono, #direccion, #cp, #localidad, #provincia, #mensaje"
    ).printThis({
      header: "<h1>Comprobante de contacto</h1>",
    });
  });
});
