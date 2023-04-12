function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;

    return alert("Estimado "+nombre+":\nSu mensaje\n
            "+asunto+"\n
            "+mensaje+"\n
            fue recibido correctamente.\n
            en breve recibira la respuesta en su mail\n
            "+correo+" );
}