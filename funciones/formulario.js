// Ocultar los campos al inicio
document.getElementById("mail").style.display = 'none';
document.getElementById("tele").style.display = "none";

function selectRadio() {
    const radios = document.getElementsByName('contactado-por');
    const mail = document.getElementById("mail");
    const telefono = document.getElementById("tele");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value === "telefono" || radios[i].value === "Whatsapp") {
                telefono.style.display = "block";
                mail.style.display = 'none';
            } else {
                mail.style.display = "block";
                telefono.style.display = "none";
            }
            break;
        }
    }
}

const ubicaciones = ["Municipalidad de Guatemala", "Emetra", "Empagua"];
const dependencias = [
    "Selecciona...", "Dirección de Atención al Vecino", "Dirección de Catastro y Administración del IUSI",
    "Dirección de Desarrollo Social", "Dirección de Informática", "Dirección de Comunicación Social", 
    "Dirección de Auditoría Interna", "Dirección de Información Geográfica Municipal", 
    "Dirección de Cooperación Internacional", "Dirección de Asuntos Jurídicos", "Dirección de Educación Artistica", 
    "Dirección Financiera", "Dirección de Movilidad Urbana", "Dirección de Recursos Humanos", 
    "Dirección de Obras", "Dirección de la Policia Municipal", "Dirección del Comercio Popular", 
    "Dirección de Control Territorial", "Dirección de Urbanística", "Dirección de Mercados", 
    "Directora de Planificación Municipal", "Dirección de Medio Ambiente", 
    "Dirección de Gestión de Residuos y Desechos", "Dirección Escuela Taller", 
    "Juzgado de Asuntos Municipales", "Dirección de la Oficina Municipal de la Mujer", 
    "Dirección de Salud y Bienestar Municipal", "Dirección de Planificación Urbana", 
    "Dirección Administrativa", "Coordinación de Mancomunidades", "Cuerpo de Bomberos Municipales", 
    "Regencia Norte", "EMETRA", "EMPAGUA"
];

const selectUbicaciones = document.getElementById('select-Ubicacion');
const selectDependencias = document.getElementById('select-Dependencia');
const labelDependencia = document.getElementById('label-Depen');

selectDependencias.style.display = 'none';
labelDependencia.style.display = 'none';

function recorrer(dependencia, valores) {
    dependencia.innerHTML = valores.map(valor => `<option>${valor}</option>`).join('');
}

function llenarUbicacion() {
    recorrer(selectUbicaciones, ubicaciones);
}

llenarUbicacion();

selectUbicaciones.addEventListener('change', (e) => {
    let dato = e.target.value;

    switch (dato) {
        case 'Municipalidad de Guatemala':
            recorrer(selectDependencias, dependencias.slice(0, 32));
            selectDependencias.style.display = 'block';
            labelDependencia.style.display = 'block';
            break;
        case 'Emetra':
        case 'Empagua':
            selectDependencias.style.display = 'none';
            labelDependencia.style.display = 'none';
            break;
        default:
            labelDependencia.style.display = 'none';
            selectDependencias.style.display = 'none';
            break;
    }
});
