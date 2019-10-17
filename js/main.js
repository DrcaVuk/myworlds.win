let send = document.getElementById("send_email");
let email = document.getElementById("email");
let title = document.getElementById('title');
let mesg = document.getElementById('text_s');
let result = document.getElementById('result')


const valid = {
    Email() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email.value).toLowerCase())) {
            email.classList.add("border-danger");
            return false; 
        } else {
            email.classList.add("border-success");
            email.classList.remove("border-danger");
            return true; 
        }
    } , 
    Title_empty() {
        if (title.value === "" || title.value === null) {
            title.classList.add("border-danger");
            return false; 
        } else {
            title.classList.add("border-success");
            title.classList.remove("border-danger");
            return true; 
        }
    }, 
    Mesg_epmty() {
        if (mesg.value === "" || mesg.value === null) {
            mesg.classList.add("border-danger");
            return false; 
        } else {
            mesg.classList.add("border-success");
            mesg.classList.remove("border-danger");
            return true; 
        }
    }, 
}

// Input test
email.addEventListener("input", valid.Email);

title.addEventListener("input", valid.Title_empty);

mesg.addEventListener("input", valid.Mesg_epmty); 

// Focus out
email.addEventListener("focusout", valid.Email);

title.addEventListener("focusout", valid.Title_empty);

mesg.addEventListener("focusout", valid.Mesg_epmty); 

//Send meil
send.addEventListener("click", () => {
    if(valid.Email && valid.Title_empty && valid.Mesg_epmty) {
        $.ajax({
           type: 'POST', 
           data: `email=${email.value}&title=${title.value}&message=${mesg.value}`, 
           url: 'app/email.php',
           success: function(result) {
               if(result) {
                result.innerHTML = "Message send"; 
                result.classList.add("bg-success"); 
               } else {
                   result.innerHTML = "Message not send!"; 
                   result.classList.add("bg-danger"); 
               }
           }
       }) 
       title.value = ""; 
       mesg.value = ""; 
    } else {
        valid.Email(); 
        valid.Title_empty(); 
        valid.Mesg_epmty(); 
        result.innerHTML = "Not complet form !"; 
        result.classList.add('bg-danger'); 
    }
}); 