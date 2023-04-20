function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;

    return alert("Estimado"+nombre+": Su mensaje"+asunto+""+mensaje+"fue recibido correctamente. en breve recibira la respuesta en su mail\n"+correo+");
}