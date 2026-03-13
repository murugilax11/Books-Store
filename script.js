let cart = [];

let buttons = document.querySelectorAll(".addCart");

buttons.forEach((btn)=>{
    btn.addEventListener("click", function(){

        let card = btn.parentElement;
        let title = card.querySelector("h4").innerText;

        cart.push(title);

        alert(title + " added to cart");

        console.log("Cart:",cart);
    });
});


function openLogin(){
    document.getElementById("loginBox").style.display="block";
}

function openSignUp(){
    document.getElementById("signupBox").style.display="block";
}

function registerUser(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign Up Successful");

    document.getElementById("signupBox").style.display="none";
}

function loginUser(){

let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;

let storedUser = localStorage.getItem("username");
let storedPass = localStorage.getItem("password");

if(user == storedUser && pass == storedPass){

alert("Login Successful");

}
else{

alert("Username or Password incorrect");

}

}

let count = 0;

buttons.forEach((btn)=>{
    btn.addEventListener("click", function(){

        count++;
        document.getElementById("cartCount").innerText=count;

    });
});