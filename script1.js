const email1=document.getElementById("exampleInputEmail1");
const email2=document.getElementById("exampleInputEmail2");
const getStarted=document.querySelector(".getStarted1 ");
const error1=document.querySelector("#error1");
const error2=document.querySelector("#error2");
var value=sessionStorage.getItem("email");
email2.value=value;
email1.addEventListener("blur",(e)=>
{
valid(email1.value,error1);
})
email2.addEventListener("blur",(e)=>
{
valid(email2.value,error2);
})
function valid(email,error)
{
let regex=/^([\._A-Za-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,6})$/;
    if(regex.test(email,error2))
     {

      error.style.display="none";
     return true;
     }
     else
     {
     error.style.display="block";
      }  
}
console.log(getStarted)
var Useremail=email1.value;
getStarted.addEventListener("click",(e) =>
{
sessionStorage.setItem('email',email1.value);
})

function color()
{
 email1.style.backgroundColor="transparent";
 email2.style.backgroundColor="transparent";
}