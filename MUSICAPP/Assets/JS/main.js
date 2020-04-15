window.addEventListener('load',initEvents);
var audio;
var flag = false;
function initEvents()
{
    audio = document.querySelector("#audio");
    loadSongs();
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click",togglePlay);
    slider = document.querySelector("#slider");
    slider.addEventListener("change",seekSong);
    song_total_time = document.querySelector(".song_total_time");

    song_curr_time = document.querySelector(".song_curr_time");
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
        li.setAttribute("title",obj.song_id);
        li.appendChild(img);
        li.appendChild(span);
        li.addEventListener("click",playSong);
        ul.appendChild(li);
    }
    )

}
function playSong()
{
    var s_id = event.srcElement.title;

    for (var i = 0; i < songs.length;i++)
    {
        if (songs[i].song_id == s_id)
        {
            var songUrl = songs[i].song_url;
            break;
        }
    }

    audio.src = songUrl;
    audio.play();

    setInterval(
        function()
        {
            slider.value = audio.currentTime;
            cduration = audio.currentTime;
            var cmin = parseInt(cduration/60);
            var csec = parseInt(cduration%60);
            song_curr_time.innerHTML = "0"+cmin+":"+csec; 
          
        },1000
    )

    setTimeout(function()
    {
        var duration = audio.duration;
        slider.max = duration;
        var min = parseInt(duration/60);
        var sec = parseInt(duration%60);
        song_total_time.innerHTML = "0"+min+":"+sec; 
    },500)


    flag=true;
    togglePlay();
    
}

function seekSong()
{
    audio.currentTime = slider.value;
}

function togglePlay()
{
    if(!flag)
    {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        audio.pause();
    }
    else{
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        audio.play();
    }
    flag =!flag;
}