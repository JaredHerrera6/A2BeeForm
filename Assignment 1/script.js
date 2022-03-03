const form = document.getElementById("Beeform")
const username = document.getElementById("username")
localStorage.setItem("Uname",username);
const email = document.getElementById("email");
localStorage.setItem("textvalue",email);
const birthdate = document.getElementById("birthday");
localStorage.setItem("Bdate",birthdate);
const password = document.getElementById("Password");
localStorage.setItem("Pword",password);
const Accounttype = document.getElementsByName("AccType");
localStorage.setItem("Atype", Accounttype);
const VerifiedPass = document.getElementById("VerifyPass");
localStorage.setItem("Vpass",VerifiedPass);

    
function formValidator(){
    var sacrednames = new Array ("jBillz", "PineapplesBelongOnPizza","TheRock",
    "ZackKing", "Rihanna", "Microsoft", "ActionJackson");
    for (let i = 0; i < sacrednames.length ; i++){
        if( username.value == sacrednames[i]){
            alert("Bezos reserved this username " + username.value + ",Try again");
            return false;
        }
    }
    if (username.value.length < 8 ){
        alert("Username must be atleast 8 characters long");
        return false;
    }
    else if(username.value.length > 25){
        alert("Username must be less than 26 characters long");
        return false;
    }
    else if(password.value !== VerifiedPass.value){
        alert("ensure passwords match");
        return false;
    }


}
