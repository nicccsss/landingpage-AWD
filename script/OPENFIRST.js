function initializeWelcomeAnimation() {
    const elements = ['welcome', 'interested', 'help'];
    const redirectButton = document.getElementById('redirectButton');
    const logo = document.querySelector('.animation-container img');

    redirectButton.classList.remove('visible');
    logo.style.opacity = 1;

    const showButton = () => {
        redirectButton.classList.add('visible');
        logo.style.opacity = 0;
    };

    elements.reduce((delay, id) => {
        const element = document.getElementById(id);
        setTimeout(() => {
            element.classList.add('animation');
            if (id === 'help') setTimeout(showButton, 500);
        }, delay);
        return delay + 1000; // Adjust as needed
    }, 500);

    redirectButton.addEventListener('click', () => window.location.href = 'indexani.html');
}

document.addEventListener('DOMContentLoaded', initializeWelcomeAnimation);
