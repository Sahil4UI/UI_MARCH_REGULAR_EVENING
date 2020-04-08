
window.addEventListener("load",function()
{

var div_1= document.querySelector("#section-1");
div_1.className = 'active';
})

window.addEventListener("scroll",function()
{
    var div_2= document.querySelector("#section-2");

    var ScrollY = window.scrollY;
    var Divtop = div_2.offsetTop;
    
    if (ScrollY > Divtop)
    {
        div_2.className = "active";
    }
    else{
        div_2.className ="";
    }


})