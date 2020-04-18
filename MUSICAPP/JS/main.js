window.addEventListener('load',initEvents);
var audio;
var flag = false;
function initEvents()
{
    audio = document.querySelector("#audio");
  
    playBtn = document.querySelector("#play");
    playBtn.addEventListener("click",togglePlay);
    slider = document.querySelector("#slider");
    slider.addEventListener("change",seekSong);
    song_total_time = document.querySelector(".song_total_time");

    song_curr_time = document.querySelector(".song_curr_time");
    loadSongs();
    loadPlayList();
}


function loadSongs()
{
    var ul = document.querySelector("#songsList");
    // console.log(songs);
    songs.forEach(function(obj)
    {
        var li = document.createElement("li");
        li.className = "col-lg-3 text-center"
        // li.style.height ="250px";
        var span = document.createElement("span");
        span.innerText = obj.song_name;
        var btn = document.createElement("button");
        btn.className = "btn btn-primary d-block w-100"
        btn.innerHTML = "ADD TO PLAYLIST";
        var img = document.createElement("img");
        img.src = obj.song_thumb;
        img.className="w-100"
        li.setAttribute("title",obj.song_id);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        btn.addEventListener("click",addSong);
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

function addSong()
{
   var  s_id  = event.srcElement.parentElement.title;
   for (var i =0;i<songs.length;i++)
   {
       if(songs[i].song_id == s_id)
       {
           var songObj = songs[i];
           obj.addSong(songObj.song_id,songObj.song_name,songObj.song_url,songObj.song_thumb);
            break;
        }
   }
   printSongs();
   savePlayList()

  
}

function printSongs()
{
    var ul = document.querySelector("#playList");
    ul.innerHTML ="";
    obj.playList.forEach(function(obj)
    {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerText = obj.name;
        var btn = document.createElement("button");
        btn.className = "btn btn-primary"
        btn.innerHTML = '<i class="fas fa-trash"></i>';
        var img = document.createElement("img");
        img.setAttribute('src',obj.image);
        img.className="w-25";
        li.setAttribute("title",obj.id);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.addEventListener("click",playSong);
        btn.addEventListener("click",deleteSongs);
        ul.appendChild(li);
    
    })
}
function deleteSongs()
{
    var s_id = event.srcElement.parentElement.title;
    for (var i =0;i<obj.playList.length;i++)
    {
        if(obj.playList[i].id == s_id)
        {
            var songObj = obj.playList[i];
            obj.deleteSongs(songObj.id);
             break;
         }
    }
    printSongs();
    savePlayList();
}

function savePlayList()
{
    if (window.localStorage)
    {
        console.log("data saved");
        var json  = JSON.stringify(obj.playList);
        localStorage.setItem("playList",json);
    }
}

function loadPlayList()
{
    if (window.localStorage)
    {
        console.log("data fetched");
        var arr= localStorage.getItem("playList");

        obj.playList  = JSON.parse(arr);
        printSongs();
    }
}