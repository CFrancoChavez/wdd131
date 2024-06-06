document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { id: 'web-development', name: 'Web Development', description: 'Building websites and web applications' },
        { id: 'app-development', name: 'App Development', description: 'Creating mobile applications' },
        { id: 'seo', name: 'SEO Services', description: 'Improving search engine rankings' },
        { id: 'other', name: 'Other', description: 'Other services' }
    ];

    const serviceSelect = document.getElementById('service');

    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = service.name;
        serviceSelect.appendChild(option);
    });
});
