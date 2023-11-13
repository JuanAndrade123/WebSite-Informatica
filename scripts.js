function mostrarIframe(rutaIframe) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<iframe src="' + rutaIframe + '" width="100%" height="600px"></iframe>';
}

function mostrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "block";
}

function cerrarModal(idModal) {
    var modal = document.getElementById(idModal);
    modal.style.display = "none";
}
