// Funcionalidad para el menú hamburguesa en la vista móvil
// // Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu'); 

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Córdoba Argentina",
      location: "Córdoba City, Argentina",
      dedicated: "2015, Mayo, 17",
      area: 34369,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/beda4b5a9c6536164aaf8298264d2453cee4e13a/full/1600%2C/0/default"
    },
    {
      templeName: "Montevideo Uruguay",
      location: "Montevideo City, Uruguay",
      dedicated: "2001, Marzo, 18",
      area: 10699,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/b3415f6d30c8ab6e832b65fa5893b68d148a161b/full/640%2C/0/default"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires City, Argentina",
      dedicated: "1986, Enero, 17",
      area: 17707,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/a118f13ac19a098695c173285743d4d418a7f1bd/full/1600%2C/0/default"
    },
    // Add more temple objects here...
  ];

createTempleCard(temples);
// links 
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

//Events
homeLink.addEventListener('click', () =>{
  window.location.href = "filtered-temples.html";
} )

oldLink.addEventListener('click', ()=>{
createTempleCard(temples.filter(temple => temple.dedicated < "1900"));  
});

newLink.addEventListener('click', ()=>{
createTempleCard(temples.filter(temple => temple.dedicated > "2000"))
});

largeLink.addEventListener('click', () => {
createTempleCard(temples.filter(temple => temple.area > "90000"))
});


smallLink.addEventListener('click', () => {
  createTempleCard(temples.filter(temple => temple.area < "10000"))
  });

//Function 
function createTempleCard(filteredTemples) {
  document.querySelector(".grid-container").innerHTML = "";//to refresh 
  //populate the html elements
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let name = document.createElement("h3");
    name.classList.add("name");
    
    let location = document.createElement("p");
    location.classList.add("location");
    
    let dedication = document.createElement("p");
    dedication.classList.add("dedication");
    
    let area = document.createElement("p");
    area.classList.add("area");
    
    let img = document.createElement("img");
    img.classList.add("temple-img");



    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid-container").appendChild(card);
  });
}