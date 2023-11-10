let manuales = [];
let opcionManuales;
let contenedorManuales = document.getElementById('contenedor-manuales');

let tipo;

class manual {
  constructor(nombre, url, foto) {
    this.nombre = nombre;
    this.url = url;
    this.foto = foto;
  }
}

let completo = new manual('completo1', 'manuales/manual.html', 'imagenes/PORTADA.jpg');
let primera = new manual('primera1', 'manuales/recepcion.html', 'imagenes/AMARILLO.jpg');
let segunda = new manual('segunda1', 'manuales/escritorio.html', 'imagenes/TURQUESA.jpg');
let tercera = new manual('tercera1', 'manuales/campo1.html', 'imagenes/MORADO1.jpg');
let cuarta = new manual('cuarta1', 'manuales/campo2.html', 'imagenes/MORADO2.jpg');
let quinta = new manual('quinta1', 'manuales/campo3.html', 'imagenes/MORADO3.jpg');
let sexta = new manual('sexta1', 'manuales/mensajeria.html', 'imagenes/ROSADO.jpg');
let septima = new manual('septima1', 'manuales/correo.html', 'imagenes/AQUA.jpg');
let octava = new manual('octava1', 'manuales/telefonica.html', 'imagenes/CELESTE.jpg');
let novena = new manual('novena1', 'manuales/pm.html', 'imagenes/AZUL.jpg');
let decima = new manual('decima1', 'manuales/pmt.html', 'imagenes/VERDE.jpg');
let onceava = new manual('onceava1', 'manuales/bomberos.html', 'imagenes/ANARANJADO.jpg');

manuales.push(completo, primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, decima, onceava);

manuales.forEach((manual) => {

  opcionManuales = `<div class="imagenes">
    <button class = "btn" id="${manual.nombre}"> <a href="${manual.url}">
            <img src="${manual.foto}" alt="${manual.nombre}"/>
        </a></button>
      </div>`

  contenedorManuales.innerHTML += opcionManuales;

});

/*
let primera1 = document.querySelector('#primera');
primera1.addEventListener('click', primeraParte);


function primeraParte() {
  alert('primera parte')
}




function manualCompleto() {
  let cont = document.querySelector(".flipbook").innerHTML = 'ya'
}


*/












