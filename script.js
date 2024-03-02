function redirectTojump() {
    document.body.classList.add('zoom-in');
    window.location.href = 'jump.html';
}

function redirectTomouse   () {
    document.body.classList.add('zoom-in');
    window.location.href = 'mouse.html';
}

function redirectToindexani() {
    document.body.classList.add('zoom-in');
    window.location.href = 'indexani.html';
}

function redirectToresume() {
    document.body.classList.add('zoom-in');
    window.location.href = 'resume.html';
}



document.addEventListener("DOMContentLoaded", function() {
    // Get all the activity links
    var activityLinks = document.querySelectorAll("ul li a");

    // Add click event listeners to each activity link
    activityLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();
            
            // Get the href attribute of the clicked link
            var href = link.getAttribute("href");
            
            // Redirect to the activity page
            window.location.href = href;
        });
    });
});
