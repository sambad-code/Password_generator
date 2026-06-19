let passShow = document.getElementById("password");
let copyBtn = document.getElementById("copyBtn")
let upperCase = document.querySelector(".upperCase");
let lowerCase = document.querySelector(".lowerCase")
let num = document.querySelector(".num");
let sym = document.querySelector(".sym")
let generate = document.querySelector(".generate");





copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passShow.value)
    alert("password is copied")
})

generate.addEventListener("click", () => {
    location.reload()
})


let upper_case = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
let lower_case = "asdfghjklqwertyuiopmnxbcv";
let number = "0123456789";
let symbol = "/.,;'[]=-)(*&^%$#@><";

let length = 12;

let allChar = upper_case + lower_case + number + symbol;

function createPass(){
    
    password = "";
    password += upper_case[Math.floor(Math.random()*upper_case.length)];
    password += lower_case[Math.floor(Math.random()*lower_case.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
    password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    console.log(password)
    passShow.value = password;


}
createPass()



