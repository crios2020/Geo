function getPlataforma(){
    var parser = new UAParser(); 
    console.log(parser.getResult());
    document.getElementById("browser").value=   parser.getResult().browser.name+" "+
                                                parser.getResult().browser.version
    document.getElementById("cpu").value=       parser.getResult().cpu.architecture
    document.getElementById("device").value=    parser.getResult().device.model+" "+
                                                parser.getResult().device.type+" "+
                                                parser.getResult().device.vendor
    document.getElementById("engine").value=    parser.getResult().engine.name+" "+
                                                parser.getResult().engine.version
    document.getElementById("os").value=        parser.getResult().os.name+" "+
                                                parser.getResult().os.version
    document.getElementById("ua").value=        parser.getResult().ua
}