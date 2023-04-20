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
  document.getElementById('Cupon').innerHTML= `
  <div class="fcupon pb-2">
  <h2 class="text-light text-center pt-3">DISFRUTA TU CUPÓN DE DESCUENTO
  </h2><br>
  <div id="cupon">
  <p class="mt-1 py-5 text-center col-12 cuponL">`
  +codigo+
  `</p>
  </div>
  </div>`
  ;
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
/*
$("#regForm").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  }
});*/

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


var dataBank = document.querySelector("#dataBank")
// !--const date = new Date().toJSON().slice(0, 10);-->

fetch("https://api.estadisticasbcra.com/usd", {
    headers: {
        Authorization: 
        "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTMxMzg4MzksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlbGllbHJlaXNzQHlhaG9vLmNvbS5hciJ9.6_7q-EtL2yrk1eyNG3q8meIbVflxx5QOuvvs8mPZF9FIymPAONLy7tpPYDoz9Varv3gyG9UG9YmI0d_u_48Nfg"
    },
})
.then((response) => response.json())
.then((data)=>{
   console.log(data)

   data.forEach((info) =>{
    // /if (info.d == date.toString()){/
    const content = document.createElement("div")
    content.innerHTML = `
    <h4> a la fecha : ${info.d} la incotizacion del dolar es ${info.v}</h4>
    `
    dataBank.append(content)       
    
   })
    
   
})