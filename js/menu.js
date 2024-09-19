function cargarMenu(){

    menu=`
    <!-- Menu de navegación -->
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="icons/globe-americas.svg" alt="Bootstrap" width="30" height="24">
                GEO
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/gps.html">GPS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/isp.html">ISP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/plataforma.html">Plataforma</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/clima.html">Voz</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/voice.html">Clima</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/acerca.html">Acerca de</a>
                    </li>
                    <li class="nav-item">
                        <p class="nav-link disabled text-white" aria-current="page" id="reloj"></p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
    document.getElementById("barra").innerHTML=menu
}