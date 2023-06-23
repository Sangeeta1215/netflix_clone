 var row=document.getElementById("head");
 window.addEventListener("scroll",(e)=>
 {
    var scrollTop = document.documentElement.scrollTop;
   
 if(scrollTop>=120)
 {
row.style.backgroundColor="black";
}
else
{
    row.style.backgroundColor="transparent";
}
 })