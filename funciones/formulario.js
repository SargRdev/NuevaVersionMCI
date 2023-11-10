let mail = document.getElementById("mail").style.display = 'none'
let telefono = document.getElementById("tele").style.display = "none"

function selectRadio() {

    const radios = document.getElementsByName('contactado-por');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            if (radios[i].value === "telefono") {
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            } else if (radios[i].value === "Whatsapp") {
                let telefono = document.getElementById("tele").style.display = "block"
                let mail = document.getElementById("mail").style.display = 'none'
            } else {
                let mail = document.getElementById("mail").style.display = "block"
                let telefono = document.getElementById("tele").style.display = "none"
            }
            break;
        }
    }
}

let ubicaciones = ["Municipalidad de Guatemala", "Emetra", "Empagua"];
let dependencias = ["Selecciona...", "Dirección de Atención al Vecino", "Dirección de Catastro y Administración del IUSI",
    "Dirección de Desarrollo Social",
    "Dirección de Informática",
    "Dirección de Comunicación Social", "Dirección de Auditoría Interna",
    "Dirección de Información Geográfica Municipal",
    "Dirección de Cooperación Internacional",
    "Dirección de Asuntos Jurídicos",
    "Dirección de Educación Artistica",
    "Dirección Financiera",
    "Dirección de Movilidad Urbana",
    "Dirección de Recursos Humanos",
    "Dirección de Obras",
    "Dirección de la Policia Municipal",
    "Dirección del Comercio Popular",
    "Dirección de Control Territorial",
    "Dirección de Urbanística",
    "Dirección de Mercados",
    "Directora de Planificación Municipal",
    "Dirección de Medio Ambiente",
    "Dirección de Gestión de Residuos y Desechos",
    "Dirección Escuela Taller",
    "Juzgado de Asuntos Municipales",
    "Dirección de la Oficina Municipal de la Mujer",
    "Dirección de Salud y Bienestar Municipal",
    "Dirección de Planificación Urbana",
    "Dirección Administrativa",
    "Coordinación de Mancomunidades",
    "Cuerpo de Bomberos Municipales",
    "Regencia Norte",
    "EMETRA", "EMPAGUA"
];

console.log(dependencias.length)
let selectUbicaciones = document.getElementById('select-Ubicacion');
let selectDependencias = document.getElementById('select-Dependencia')
let label_dependencia = document.getElementById('label-Depen')

selectDependencias.style.display = 'NONE'
label_dependencia.style.display = 'NONE'

function recorrer(depen, valores) {
    selectDependencias.innerHTML = '';

    for (let index of valores) {
        depen.innerHTML += `<option>${index}</option>`
    }
}

function llenarUbicacion() {
    recorrer(selectUbicaciones, ubicaciones)
}


llenarUbicacion()

selectUbicaciones.addEventListener('change', (e) => {
    let dato = e.target.value

    switch (dato) {
        case 'Municipalidad de Guatemala':
            recorrer(selectDependencias, dependencias.slice(0, 32));
            selectDependencias.style.display = 'BLOCK'
            label_dependencia.style.display = 'BLOCK'
            break;
        case 'Emetra':
            recorrer(selectDependencias, dependencias.slice(33, 34));
            label_dependencia.style.display = 'NONE'
            selectDependencias.style.display = 'NONE'
            break;
        case 'Empagua':
            recorrer(selectDependencias, dependencias.slice(34, 35));
            label_dependencia.style.display = 'NONE'
            selectDependencias.style.display = 'NONE'
            break;

        default:
            label_dependencia.style.display = 'NONE'
            selectDependencias.style.display = 'NONE'
            break;
    }

})







