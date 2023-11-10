let info = document.getElementById("info")
let formulario = document.getElementsByTagName("form")

info.addEventListener('click', verificarFormulario)

var campo1 = document.getElementById("nombre");
var campo2 = document.getElementById("select-Ubicacion");
var campo3 = document.getElementById("select-Dependencia");
var campo4 = document.getElementById("area");



function verificarFormulario() {
    // Obtener referencias a los campos del formulario

    // Verificar si los campos están llenos
    if (campo1.value === "" || campo2.value === "Selecciona..." || campo2.value === "" ||
        campo3.value === "Selecciona..." || campo3.value === "" || campo4.value === "") {

        Swal.fire(
            'Oops...',
            '¡Completa tus datos para contactarte!',
            'warning'
        )
        // Al menos un campo está vacío
        return false; // Evita el envío del formulario
    }


    else {


        submitForm(form);

    }


}


function submitForm(form) {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        imageUrl: '../imagenes/SITIO_WEB_HERO-20.png',
        imageWidth: 200,
        imageHeight: 200,
        title: '<p>En menos de lo que te imaginas, sabrás de nosotros...</p>',
        confirmButtonText: 'Ok',
   
    })
        .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Enviado!', '', 'success')
                form.submit();
            }

        })
    return false;
}




