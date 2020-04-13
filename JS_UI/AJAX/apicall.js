window.addEventListener('load',initAJAX);
// JSON -> JAVASCRIPT OBJECT NOTATION
function initAJAX()
{
    var xhhttp =new XMLHttpRequest();
    xhhttp.open('get','http://newsapi.org/v2/top-headlines?country=in&apiKey=0d7e1cfacef442198dab5778f9bf5eb7');
    xhhttp.send();

    xhhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200 )
        {
            var data = this.responseText
            
            data = JSON.parse(data);
            // console.log(data);

            var articles = data.articles;
            console.log(articles);

            var ul = document.querySelector("#list_1");


            articles.forEach(function(obj)
            
            {
                var li = document.createElement('li');
                var h3 = document.createElement('h3');
                var img_div = document.createElement('div');
                
                var img = document.createElement('img');
                var p = document.createElement('p');

                h3.innerText = obj.title;
                p.innerText = obj.description;
                img.src = obj.urlToImage;
                //  img.createAttribute('src',obj.urlToImage);
                img_div.appendChild(img);
                li.appendChild(h3);
                li.appendChild(img_div);
                li.appendChild(p);
                ul.append(li);

            
            }
            
            ) 

        }
    }
}