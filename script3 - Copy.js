const card=document.querySelectorAll(".card");
let clicked=card[0];
checked(clicked);
card.forEach(item=>
    {
    item.addEventListener("click",(e)=>
    {  
    unCheck(clicked);  
     clicked=item;
     checked(clicked)
    })
})
function checked(clicked)
{
    var icons=clicked.querySelectorAll(".bi");
    icons.forEach(val=>
       {
       val.setAttribute("fill","blue");
       })
}
function unCheck(clicked)
{
    var icons=clicked.querySelectorAll(".bi");
    icons.forEach(val=>
       {
       val.setAttribute("fill","currentColor");
       })
}
const nextButton=document.querySelector(".nextButton");
nextButton.addEventListener("click",(e)=>
{
location.href="start.html";
})