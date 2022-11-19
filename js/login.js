function validate()
{
var username=document.getElementById("emailid").value;
var password=document.getElementById("password").value;
if(emailid=="admin"&& password=="user")
{
    alert("login succesfully");
    return false;
}
else
{
    alert("login failed");
}
}