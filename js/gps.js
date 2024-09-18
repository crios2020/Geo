//Archivo para consultar el GPS del dispositivo

function geoFindMe() {
    var latitud=0
    var longitud=0
    const estado = document.getElementById("gpsStatus")
    const mapLink = document.getElementById("map-link")
    const coordenadas = document.getElementById("coordenadas")
    //const direccion = document.getElementById("direccion")

    estado.value = "Buscando…..."
    coordenadas.value="Buscando coordenadas ....."
    //direccion.value="Buscando dirección ....."

    function success(position) {
        latitud = position.coords.latitude
        longitud = position.coords.longitude

        estado.value = "GPS OK";
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`
        coordenadas.value = `lat: ${latitud} °, long: ${longitud} °`
        //getDireccion()
    }

    function error() {
        estado.value = "No se pudo encontrar su ubicación!"
        coordenadas.value = "No se pudo encontrar su ubicación!"
        //direccion.value = "No se pudo encontrar su ubicación!"
    }

    if (!navigator.geolocation) {
        estado.value = "Su dispositivo no soporta Geolocalización"
        coordenadas.value = "No se pudo encontrar su ubicación!"
        //direccion.value = "No se pudo encontrar su ubicación!"
    } else {
        navigator.geolocation.getCurrentPosition(success, error)
    }
}

/*
function getDireccion(){
    url=`http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=${longitud}&lat=${latitud}`
    //El Api usig no esta funcionando en Celulares y solo tiene alcance a AMBA
    axios.get(url)
    //axios.get(`https://ipwhois.app/json/`)
        .then(function (response) {
            direccion.value=response.data.direccion
         })
        .catch(function (error) {
            direccion.value="No fue posible encontrar la dirección!"
        })
        .then(function () {
    });
}
*/



