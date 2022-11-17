const colours=["green", "red", "blue", "yellow","black", "brown", "orange", "white", "pink", "lightBlue", "lightGreen", "lightPink", "violet"];
const btn=document.getElementById("btn");
const colour=document.querySelector(".colour");
btn.addEventListener("click", function(){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colours[randomNumber];
    colour.textContent=colours[randomNumber];
});
function getRandomNumber(){
    let dummy=Math.floor( Math.random()*colours.length);
    return dummy;
}
