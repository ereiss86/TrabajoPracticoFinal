function enviarConsulta(){
    var nombre=document.getElementById("name").value;
    var correo=document.getElementById("email").value;
    var asunto=document.getElementById("subject").value;
    var mensaje=document.getElementById("message").value;

    return confirm("Estimado "+nombre+": \nSu mensaje \n"+asunto+"\n"+mensaje+"\nFue recibido correctamente. \nEn breve recibida la respuesta en su mail\n"+correo+"");
}