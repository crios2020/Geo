parser = new UAParser()
function navegador(){
    return parser.getResult().browser.name+
            " version"+
            parser.getResult().browser.version
}

function so(){
    return parser.getResult().os.name
}

function zonaHoraria(){
    resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}

function getISPStatus(){
    const dato = document.getElementById("datoISPStatus")
    axios.get('https://ipwhois.app/json/')
        .then(function (response) {
            dato.value="Se encontró conexión a Internet."
        })
        .catch(function (error) {
            dato.value = "No se encontró conexión a Internet."
        })
        .then(function () {
    });
    return dato.value
}

function getIP(){
    const dato = document.getElementById("datoIP")
    axios.get('https://ipwhois.app/json/')
        .then(function (response) {
            dato.value=response.data.ip
        })
        .catch(function (error) {
            dato.value = "No se encontró conexión a Internet."
        })
        .then(function () {
    });
    return dato.value
}

function getISP(){
    const dato = document.getElementById("datoISP")
    axios.get('https://ipwhois.app/json/')
        .then(function (response) {
            dato.value=response.data.isp
        })
        .catch(function (error) {
            dato.value = "No se encontró conexión a Internet."
        })
        .then(function () {
    });
    return dato.value
}

function getISPx(){
    axios.get(`https://ipwhois.app/json/`)
    .then(function (response) {
        //console.log(response.data.direccion)
        //direccion.value = response.data.direccion
        ispStatus = "Proveedor de Internet OK."
        
        //region.value=response.data.continent+" "+response.data.country+" "+response.data.city

        //latitud = response.data.latitude
        //longitud = response.data.longitude

        //mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`
        //coordenadas.value = `lat: ${latitud} °, long: ${longitud} °`
        //isp.value = response.data.isp
        //ip.value = response.data.type+" "+response.data.ip
    })
    .catch(function (error) {
        ispStatus = "Error de conexión a Internet."
    })
    .then(function () {
    });
}