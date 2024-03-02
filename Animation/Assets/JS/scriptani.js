function redirectToHome() {
    document.body.classList.add('zoom-in');
    window.location.href = 'indexani.html';
}

function redirectToClothingPage() {
    document.body.classList.add('zoom-in');
    window.location.href = 'clothing.html';
}

function redirectToDistributor() {
    document.body.classList.add('zoom-in');
    window.location.href = 'distributor.html';
}

function redirectToContact() {
    document.body.classList.add('zoom-in');
    window.location.href = 'contact.html';
}

function updateAttachmentLabel(input) {
    var fileName = input.files[0].name;
    document.getElementById('attachmentLabel').innerText = fileName;
}

function submitForm(form) {
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => response.json()) 
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.typing').forEach((element) => {
        element.innerHTML = [...element.textContent]
            .map((char, i) => `<span style="animation: typing 5s steps(40) forwards ${i * 0.1}s">${char}</span>`)
            .join('');
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

       z``
        submitForm(this);
    });
});
