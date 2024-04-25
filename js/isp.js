
function ispFindMe() {
    var latitud=0
    var longitud=0
    const ispStatus = document.getElementById("ispStatus")
    const region = document.getElementById("region")
    const coordenadas = document.getElementById("coordenadas")
    const mapLink = document.getElementById("map-link")
    const isp = document.getElementById("isp")
    const ip = document.getElementById("ip")

    ispStatus.value = "Buscando Intenet Service Provider ...."

    axios.get(`https://ipwhois.app/json/`)
        .then(function (response) {
            //direccion.value = response.data.direccion
            ispStatus.value = "Proveedor de Internet OK."
            region.value=response.data.continent+" "+response.data.country+" "+response.data.city

            latitud = response.data.latitude
            longitud = response.data.longitude

            mapLink.href = `https://www.openstreetmap.org/#map=18/${latitud}/${longitud}`
            coordenadas.value = `lat: ${latitud} °, long: ${longitud} °`
            isp.value = response.data.isp
            ip.value = response.data.type+" "+response.data.ip
        })
        .catch(function (error) {
            ispStatus.value = "Error de conexión a Internet."
        })
        .then(function () {
        });
}