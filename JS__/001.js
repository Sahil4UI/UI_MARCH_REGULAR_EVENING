
    window.addEventListener("load",init);
    function init()
        {
    document.getElementById("btn").addEventListener("click",f1);

    }
    
    
    function f1()
    {   
        // document.getElementById("box1");
        value = document.querySelector("#box1").value;
        span = document.querySelector("#result");
        span.innerText = value;
    }
