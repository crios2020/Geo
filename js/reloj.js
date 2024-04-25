function reloj() {
    momentoActual = new Date()
    hora = momentoActual.getHours().toString().padStart(2,"0")
    minuto = momentoActual.getMinutes().toString().padStart(2,"0")
    segundo = momentoActual.getSeconds().toString().padStart(2,"0")
    horaImprimible = "<b>"+hora + " : " + minuto + " : " + segundo+"</b>"
    document.getElementById("reloj").innerHTML = "Hora: "+horaImprimible
    setTimeout("reloj()",1000)

}