function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;

    return alert("Estimado"+nombre+": Su mensaje"+asunto+"k"+mensaje+"\nFue recibido correctamente. en breve recibida la respuesta en su mail"+correo+"");
}