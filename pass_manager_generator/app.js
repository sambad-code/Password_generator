let passShow = document.getElementById("password");
let copyBtn = document.getElementById("copyBtn")
let upperCase = document.querySelector(".upperCase");
let lowerCase = document.querySelector(".lowerCase")
let num = document.querySelector(".num");
let sym = document.querySelector(".sym")
let generate = document.querySelector(".generate");
const lengthEl = document.getElementById("length");


copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passShow.value)
    alert("password is copied")

})

 generate.addEventListener("click", () => {
    
let upper_case = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
let lower_case = "asdfghjklqwertyuiopmnxbcv";
let number = "0123456789";
let symbol = "/.,;'[]=-)(*&^%$#@><";


let chars = "";


if (upperCase.checked) {
chars += upper_case
}
if (lowerCase.checked) {
chars += lower_case
}
if (num.checked) {
chars += number
}
if (sym.checked) {
chars += symbol
}
if (chars.length === 0) {
    alert("Select at least one option!");
    return;
  }


const length = Number(lengthEl.value);

let password = "";
for(let i=0; i<length; i++){
    const randomindex = Math.floor(Math.random()*chars.length);
    password += chars[randomindex];
    console.log(password)


}
     passShow.value = password;

 })
