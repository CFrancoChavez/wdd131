// const products = [
//     {
//         id: "fc-1888",
//         name: "flux capacitor",
//         averagerating: 4.5
//     },
//     {
//         id: "fc-2050",
//         name: "power laces",
//         averagerating: 4.7
//     },
//     {
//         id: "fs-1987",
//         name: "time circuits",
//         averagerating: 3.5
//     },
//     {
//         id: "ac-2000",
//         name: "low voltage reactor",
//         averagerating: 3.9
//     },
//     {
//         id: "jj-1969",
//         name: "warp equalizer",
//         averagerating: 5.0
//     }
// ];

// window.addEventListener('DOMContentLoaded', (event) => {
//     const productSelect = document.getElementById('productName');
//     products.forEach(product => {
//         const option = document.createElement('option');
//         option.value = product.id;
//         option.textContent = `${product.name} (Avg. Rating: ${product.averagerating})`;
//         productSelect.appendChild(option);
//     });
// });
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

window.addEventListener('DOMContentLoaded', (event) => {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} (Avg. Rating: ${product.averagerating})`;
        productSelect.appendChild(option);
    });

    const reviewForm = document.getElementById('reviewForm');
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    //const featureCheckboxes = document.querySelectorAll('#features input[type="checkbox"]');
    
    // Validación adicional para "Overall Rating" y "Useful Features"
    reviewForm.addEventListener('submit', (event) => {
        //const isRatingChecked = Array.from(ratingRadios).some(radio => radio.checked);
        //const isFeatureChecked = Array.from(featureCheckboxes).some(checkbox => checkbox.checked);
        if (!reviewForm.ratingRadios.value) {
            // Display an alert message if the radio buttons are not selected
            alert("Please select an option before submitting the form.");
            event.preventDefault();
            return;
          }
        // if (!isRatingChecked) {
        //     alert('Please select an overall rating.');
        //     event.preventDefault();
        //     return;
            // if (!isRatingChecked) {
            //     alert('Please select an overall rating.');
            // }
           
        //}
    });
});
