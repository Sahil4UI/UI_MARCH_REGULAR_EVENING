window.addEventListener('load',initEvents);
var audio;
function initEvents()
{
    audio = document.querySelector("#audio");
    loadSongs();
}

function loadSongs()
{
    var ul = document.querySelector("#songsList");
    // console.log(songs);
    songs.forEach(function(obj)
    {
        var li = document.createElement("li");
        li.className = "col-lg-3 text-center"
        li.style.height ="250px";
        var span = document.createElement("span");
        span.innerText = obj.song_name;
        var img = document.createElement("img");
        img.src = obj.song_thumb;
        img.className="w-100"
        img.setAttribute("title",obj.song_id);
        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
    }
    )

    // audio.play()
}