'use strict';
// Eftersom detta var till en kompis mejl förut så gjorde jag en honeypot för att minska risken för rob-mejl 
function submitForm(event) {
    event.preventDefault(); // Förhindra standardformulärinskickning

    // Kontrollera honeypot först
    const honeypotFalt = document.getElementById('honeypot');
    if (honeypotFalt.value !== '') {
        alert('Hejdå');
        return false; // Avbryt inskick om det är en bot
    }
    var namn = encodeURIComponent(document.getElementById('name').value);
    var subject = encodeURIComponent(document.getElementById('subject').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var mailto_link = 'mailto:kontakt@fiktivtoastmaster.se?subject=' + namn + ':' + subject +
        '&body=' + message + '%0A';

    window.location.href = mailto_link;

    // Omdirigera till tack sida efter att e-postlänken har öppnats
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1000); // Fördröjning för att säkerställa att e-postklienten öppnas först
}
