'use strict';

function validateForm(event) {
    event.preventDefault(); // Förhindra standardformulärskick

    var firstName = document.getElementById('first_name');
    var lastName = document.getElementById('last_name');
    var email = document.getElementById('email');
    var attending = document.querySelectorAll('input[type="radio"]');

    try {

    if (firstName.value.length < 1) {
        throw{
            msg:'Ange förnamn',
            element:firstName};
    }
    if (lastName.value.length < 1) {
        throw{
            msg:'Ange efternamn', 
            element:lastName};
    }
    
    if (!email.value.includes('@')) {
        throw{
            msg:'Ange en epostadress, om du inte har någon kontakta Maria eller Hampus', 
            element: email};
    }
    if (!attending[0].checked && !attending[1].checked) {
        throw{
            msg:'Du måste svara Ja eller Nej', 
            element: attending[0]}; 
    }
}catch(error){
    alert('Din anmälan gick INTE igenom, '+''+error.msg);
    if (error.element) {
        error.element.focus(); 
    }

    return false; // Hindrar formuläret från att skickas
}
    // Validering godkänd
    submitForm(); 
    return true;
}

function submitForm() {

    var firstName = encodeURIComponent(document.getElementById('first_name').value);
    var lastName = encodeURIComponent(document.getElementById('last_name').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var attending = encodeURIComponent(document.querySelector('input[name="attending"]:checked').value);
    var specialDiet = encodeURIComponent(document.getElementById('special_diet').value);
    var hotelStay = document.getElementById('hotel_stay').checked ? "Ja" : "Nej";
    var roommate = encodeURIComponent(document.getElementById('roommate').value);

    var mailto_link = 'mailto:kontakt@fiktivpar.se?subject=Bröllopsanmälan' +
                      '&body=Förnamn: ' + firstName + '%0A' +
                      'Efternamn: ' + lastName + '%0A' +
                      'E-post: ' + email + '%0A' +
                      'Kommer till bröllopet: ' + attending + '%0A' +
                      'Specialkost: ' + specialDiet + '%0A' +
                      'Vill bo på hotell: ' + hotelStay + '%0A' +
                      'Rumskamrat: ' + roommate;

    // Skickar till mailto-länk
    window.location.href = mailto_link;

    // Omdirigera till tack-sida
    setTimeout(function() {
        window.location.href = "svar.html"; // Ändra till din tack-sidas URL
    }, 1000);
}
