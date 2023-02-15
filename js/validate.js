function redirect(){
    // location.replace("main.html");
    window.location.href = "main.html";
}

function validate(callback){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    if(email.value=="admin" && password.value =="12345"){
    callback();
        
    }
    else{
        alert("Invalid user");
        return false;
        
    }
}