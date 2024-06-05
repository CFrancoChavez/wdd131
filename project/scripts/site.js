const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  const hoverDiv = document.getElementById("hoverDiv");
  const texts = ["JavasCript", "HTML", "CSS", "NodeJS", "MySQL"]; // Textos diferentes

  showTextButton.addEventListener("click", function () {
    hoverDiv.style.backgroundColor = "#cce7ff";

    // Crear y añadir párrafos con retraso
    for (let i = 0; i < texts.length; i++) {
      setTimeout(() => {
        const para = document.createElement("p");
        para.textContent = texts[i];
        para.classList.add("dynamic-text");
        hoverDiv.appendChild(para);
        para.style.display = "block";
      }, (i + 1) * 500); // 500 ms de retraso entre cada párrafo
    }
  });

  hoverDiv.addEventListener("mouseleave", function () {
    hoverDiv.style.backgroundColor = "";

    // Ocultar y eliminar párrafos
    // while (hoverDiv.firstChild) {
    //     hoverDiv.removeChild(hoverDiv.firstChild);
    // }
    const dynamicTexts = hoverDiv.querySelectorAll(".dynamic-text");
    dynamicTexts.forEach((para) => {
      hoverDiv.removeChild(para);
    });
  });
});
// Obtén el elemento del footer donde deseas mostrar la fecha y hora
var lastModifiedElement = document.getElementById("lastModified");

// Obtiene la fecha y hora actual
var currentDate = new Date();

// Formatea la fecha y hora actual como deseas
var formattedDate = currentDate.toLocaleString();

// Establece el texto dentro del elemento del footer
lastModifiedElement.textContent = formattedDate;
