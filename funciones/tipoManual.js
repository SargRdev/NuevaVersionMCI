function manualCompleto() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.setAttribute('scrolling', 'no');
    iframe.className = 'fp-iframe';
    iframe.src = 'https://heyzine.com/flip-book/8624ab1699.html';
    iframe.style.border = '1px solid lightgray';
    iframe.style.width = '100%';
    iframe.style.height = '400px';

    const contenedor = document.getElementById('flips');
    contenedor.innerHTML = '';
    contenedor.appendChild(iframe);
}
