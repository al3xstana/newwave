const form = document.querySelector('form');
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "al3xstana@gmail.com",
        Password : "",
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
/* preloader */
var loader= document.getElementById('preloader');
document.body.style.overflow = 'hidden' ;
window.addEventListener('load',function(){
    loader.style.display = 'none';
    document.body.style.overflow = '';
})