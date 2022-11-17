const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];
const btn=document.getElementById("btn");
const colour=document.querySelector(".colour");
//console.log(colour);
btn.addEventListener("click", function(){
    let hexCol="#";
    for(let i=0; i<6; i++){
       hexCol+= hex[getRandomNumber()];
      // hexCol +=hex[0];
    }
    colour.textContent= hexCol;
    document.body.style.backgroundColor= hexCol;
});
function getRandomNumber(){
    let dummy=Math.floor(Math.random()*hex.length);
    return dummy;
}
