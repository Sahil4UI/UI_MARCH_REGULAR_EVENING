document.querySelector(".btn").addEventListener('click',showForm); 
document.querySelector(".overlay").addEventListener('click',hideForm); 

function showForm()
{
    document.querySelector("#form").className ="showForm";
}
function hideForm()
{
    document.querySelector("#form").className ="";
}
