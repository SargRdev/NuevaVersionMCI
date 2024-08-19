let slides = [];
let contenedorSlide = document.querySelector('.slide');
let fotosSlide;

class Slide {
    constructor(url) {
        this.url = url;
    }
}

let foto1 = new Slide("AMARILLO.jpg");
let foto2 = new Slide('imagenes/FOTOS-CARRUSEL/call-center.jpg');
let foto3 = new Slide('imagenes/FOTOS-CARRUSEL/informacion.jpg');
let foto4 = new Slide('imagenes/FOTOS-CARRUSEL/cei.jpg');

slides.push(foto1, foto2, foto3, foto4);

slides.forEach((fot) => {
    fotosSlide = `<div class="item-slide">
  <img src="${fot.url}" alt="">
</div>`;
    contenedorSlide.innerHTML += fotosSlide;
});
