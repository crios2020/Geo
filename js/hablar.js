//Decorado para generar voz

function hablar(mensaje){
    const message = new SpeechSynthesisUtterance(mensaje);
    speechSynthesis.speak(message);
}