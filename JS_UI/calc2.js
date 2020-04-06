window.addEventListener('load',function()
{
    numbers =document.querySelectorAll(".num");
    for(var i=0;i<numbers.length ;i++)
    {
        numbers[i].addEventListener("click",appendOpr);
    }

})

function appendOpr()
{   num = event.srcElement.innerText;
   result =document.querySelector("#Result"); 
   result.value += num;
}

