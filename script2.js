const email=document.querySelector("#exampleInputEmail1");
const pwd=document.querySelector("#exampleInputPassword1");
const alert=document.querySelector(".alert");
var value=sessionStorage.getItem("email");
email.value=value;
var error=document.querySelector(".foremail");
var error1=document.querySelector(".forpwd");
var signin=document.querySelector(".signin");
const form=document.querySelector(".form")
console.log(form)
var n1;
var n2;
email.addEventListener("blur",(e)=>
{
    let regex=/^([\._A-Za-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,6})$/;
    if(regex.test(email.value))
     {
      n1=true;
      error.style.display="none";
     isvalid();
     return true;
     }
     else
     {
     error.style.display="block";
      }  
})
pwd.addEventListener("blur",(e)=>
{
if(pwd.value.length >= 4)
{
    n2=true;
    error1.style.display="none";
    isvalid();
return true;
}
else
{
    error1.style.display="block";
}
})
signin.addEventListener("click",(e)=>
{
    e.preventDefault()
    let formdata=new FormData(form);
    let values=[...formdata.entries()];
    console.log(values)
    let obj=Object.fromEntries(values);
    console.log(obj)
    var record;
    let data=(function(){
        record=JSON.parse(localStorage.getItem('userInformation'));
        if(record==null)
        {
        return [];
        }
    return record;
     })();

  if(isvalid())
        {
            if(data==[])
            {
                localStorage.setItem('userInformation',JSON.stringify(obj));
            }
        if(register(data)){
            data.push(obj);
            localStorage.setItem('userInformation',JSON.stringify(data));
          location.href="step3.html";
           }
        }

})
function register(data)
   {
    console.log(data)
   for(var item of data)
   {
    if(item.email==email.value)
    {
    alert.classList.remove("d-none");
    return false;
    }
}
return true;
}
function isvalid()
{
    if(n1==true && n2==true)
    {
    return true;
    }
}
