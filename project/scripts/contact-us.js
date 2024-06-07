const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            service: form.service.value,
            message: form.message.value
        };

        // Store the form data in localStorage
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Display the success message
        successMessage.classList.remove('hidden');
        successMessage.textContent = `Message sent successfully! Name: ${formData.name}, Service: ${formData.service}`;

        // Clear the form
        form.reset();

        // Optionally, clear the message after a few seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
    homeButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});
