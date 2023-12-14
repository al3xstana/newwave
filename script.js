const form = document.querySelector('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "al3xstana@gmail.com",
        Password : "9DF552EB968844FBC9AC1FC427401831FD9E",
        To : 'al3xstana@gmail.com',
        From : "al3xstana@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener('sumbit',(e)=>{
    e.preventDefault();
    sendEmail();
})