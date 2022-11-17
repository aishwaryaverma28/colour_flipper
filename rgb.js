const btn= document.getElementById("btn");
const colour=document.querySelector(".colour");

function getRandomNumber(){
    let dummy=Math.floor(Math.random()*254);
    return dummy;
}

btn.addEventListener("click", function(){
let num1=getRandomNumber();
let num2=getRandomNumber();
let num3=getRandomNumber();
let rgb=`rgb(${num1},${num2},${num3})`;
console.log(rgb);
colour.textContent=rgb;
document.body.style.backgroundColor=rgb;
});