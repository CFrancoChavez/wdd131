const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu'); 

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function() {
    const hoverDiv = document.getElementById('hoverDiv');
    const texts = ["JavasCript", "HTML", "CSS","NodeJS","MySQL"]; // Textos diferentes

    hoverDiv.addEventListener('mouseenter', function() {
        hoverDiv.style.backgroundColor = '#cce7ff';

        // Crear y añadir párrafos con retraso
        for (let i = 0; i < texts.length; i++) {
            setTimeout(() => {
                const para = document.createElement('p');
                para.textContent = texts[i];
                hoverDiv.appendChild(para);
                para.style.display = 'block';
            }, (i + 1) * 500); // 500 ms de retraso entre cada párrafo
        }
    });

    hoverDiv.addEventListener('mouseleave', function() {
        hoverDiv.style.backgroundColor = '';

        // Ocultar y eliminar párrafos
        while (hoverDiv.firstChild) {
            hoverDiv.removeChild(hoverDiv.firstChild);
        }
    });
});

