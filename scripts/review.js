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
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('productName');
//     const product = products.find(p => p.id === productId);

//     document.getElementById('reviewProductName').textContent = product ? product.name : 'Unknown Product';
//     document.getElementById('reviewRating').textContent = urlParams.get('rating');
//     document.getElementById('reviewInstallationDate').textContent = urlParams.get('installationDate');
//     document.getElementById('reviewFeatures').textContent = urlParams.getAll('features').join(', ');
//     document.getElementById('reviewWritten').textContent = urlParams.get('review') || 'N/A';
//     document.getElementById('reviewUserName').textContent = urlParams.get('userName') || 'Anonymous';
// });
// document.addEventListener('DOMContentLoaded', () => {
//     // Get the query parameters from the URL
//     const params = new URLSearchParams(window.location.search);
//     const productName = params.get('productName');
//     const rating = params.get('rating');
//     const installationDate = params.get('installationDate');
//     const features = params.getAll('features');
//     const review = params.get('review');
//     const userName = params.get('userName');

//     // Display the review details
//     document.getElementById('reviewProductName').textContent = productName;
//     document.getElementById('reviewRating').textContent = rating;
//     document.getElementById('reviewInstallationDate').textContent = installationDate;
//     document.getElementById('reviewFeatures').textContent = features.join(', ');
//     document.getElementById('reviewWritten').textContent = review;
//     document.getElementById('reviewUserName').textContent = userName;

//     // Increment the review count in localStorage
//     let reviewCount = localStorage.getItem('reviewCount');
//     if (!reviewCount) {
//         reviewCount = 0;
//     }
//     reviewCount = parseInt(reviewCount) + 1;
//     localStorage.setItem('reviewCount', reviewCount);

//     // Display the review count
//     document.getElementById('reviewCount').textContent = reviewCount;

//     submitAnotherReviewButton.addEventListener('click', () => {
//         window.location.href = 'form.html';
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    // Obtener elementos del DOM
    const reviewProductName = document.getElementById('reviewProductName');
    const reviewRating = document.getElementById('reviewRating');
    const reviewInstallationDate = document.getElementById('reviewInstallationDate');
    const reviewFeatures = document.getElementById('reviewFeatures');
    const reviewWritten = document.getElementById('reviewWritten');
    const reviewUserName = document.getElementById('reviewUserName');
    const reviewCount = document.getElementById('reviewCount');
    const submitAnotherReviewButton = document.getElementById('submitAnotherReviewButton');

    // Obtener datos de URL
    const params = new URLSearchParams(window.location.search);
    const productName = params.get('productName');
    const rating = params.get('rating');
    const installationDate = params.get('installationDate');
    const features = params.get('features');
    const writtenReview = params.get('writtenReview');
    const userName = params.get('userName');

    // Asignar datos a los elementos del DOM
    reviewProductName.textContent = productName;
    reviewRating.textContent = rating;
    reviewInstallationDate.textContent = installationDate;
    reviewFeatures.textContent = features;
    reviewWritten.textContent = writtenReview;
    reviewUserName.textContent = userName;

    // Manejo de localStorage para contar las reseñas
    let count = localStorage.getItem('reviewCount');
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem('reviewCount', count);
    reviewCount.textContent = count;

    // Evento de clic para el botón "Submit Another Review"
    submitAnotherReviewButton.addEventListener('click', () => {
        window.location.href = 'form.html';
    });

});
