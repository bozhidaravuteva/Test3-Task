//table all movies

var url = "../json/moviesJSON.json"
var request = new XMLHttpRequest();
request.open('get', url, true);
request.send(null);

request.addEventListener('readystatechange', function () {
        if (request.readyState === request.DONE) {
            if (request.status >= 200 && request.status <= 299) {
                var moreInfo =JSON.parse(request.responseText);
                var table = document.querySelector('table#allMovies > tbody');
                    moreInfo.forEach(function(movie){
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    td1.appendChild(movie.Title);
                    var td2 = document.createElement("td");
                    td2.appendChild(movie.Year);
                    var td3 = document.createElement("td");
                    td3.appendChild(movie.Genre);
                    var td4 = document.createElement("td");
                    td4.appendChild(movie.Director);

                    table.appendChild(tr);
                    });
            }
        } 
})
