var more=document.getElementById("more");
var btn=document.querySelector(".btn-link");
var signin=document.querySelector(".signin");
var email=document.querySelector("#exampleInputEmail1");
form=document.querySelector(".form");
var alert=document.querySelector(".alert");
var message=document.querySelector(".message");
var pwd=document.querySelector("#exampleInputPassword1");
console.log(btn.classList)
btn.addEventListener("click",(e)=>
{
more.style.display="block";
btn.style.display="none";
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
     
     if(register(data))
      {
     location.href="index.html";
     }
     else if(email.value=="" && pwd.value=="")
     {
        message.innerHTML="Please enter your email and password";
        alert.classList.remove("d-none");
     }
     else
     {
        message.innerHTML=" You have not registerd please register yourself";
      alert.classList.remove("d-none");
     }
    })

function register(data)
   {
    for(var i=0;i<data.length;i++)
    {
        if(data[i].email==email.value)
        {
        if(data[i].password==pwd.value)
        {
        return true;
        }
        message.innerHTML="";
        message.innerHTML="Wrong Password";
        alert.classList.remove("d-none");
        }
    }
    {      
}
return false;
}