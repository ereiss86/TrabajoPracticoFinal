function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;
if (nombre!='' && correo!=''&& asunto!=''&& mensaje!='') { 
    return alert("Estimado "+nombre+": \nSu mensaje \n"+asunto+"\n"+mensaje+"\nFue recibido correctamente. \nEn breve recibida la respuesta en su mail\n"+correo+"");
}else {alert("Tienes que completar todos los campos")}
}

function codigoDesc(){
    var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var codigo = '';
    
    for (var i = 0; i < 6; i++) {
          var digito = Math.floor(Math.random() * letras.length);
        //   var digito = Math.random() * letras.length;
          codigo += letras[digito];
    }
    alert("Su cupón de descuento es: \n\n" + codigo);
  }
 
  function suscribe(){
    correo= prompt("ingrese su correo")
    if (/[@]/.test(correo)) {
        alert("¡Su correo \n"+correo+" \nfue registrado exitosamente!")
        codigoDesc();
      } else {
        alert("Error: \nIngrese una dirección valida. \nPor favor, inténtelo de nuevo.");
      }
  }

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
  });
