function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;

    return alert("Estimado "+nombre+":\n Su mensaje\n"+asunto+"\n"+mensaje+"\nfue recibido correctamente.\n en breve recibira la respuesta en su mail\n          "+correo+" );
}