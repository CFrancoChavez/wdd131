function adjustButtonSize() {
    const button = document.querySelector('#contactButton');
    if (window.innerWidth <= 768) {
        button.style.padding = '20px 40px';
        button.style.fontSize = '20px';
    } else {
        button.style.padding = '15px 32px';
        button.style.fontSize = '16px';
    }
}

// Ajustar el tamaño del botón al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    adjustButtonSize();
    
    // Agregar evento click al botón para redirigir a la página de contacto
    const button = document.querySelector('#contactButton');
    button.addEventListener('click', () => {
        window.location.href = 'contact-us.html';
    });
});

// Ajustar el tamaño del botón al redimensionar la ventana
window.addEventListener('resize', adjustButtonSize);