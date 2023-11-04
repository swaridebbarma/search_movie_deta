let searchButton = document.getElementById("search");
searchButton.onclick = function () {
    let searchMovie = document.getElementById("search-movie-box").value;

    if (searchMovie) {
        let movieRequest = new XMLHttpRequest();
        movieRequest.open("GET", `http://www.omdbapi.com/?t=${searchMovie}&apikey=8bf35543`, true);
        movieRequest.send();

        movieRequest.onload = function () {
            if (movieRequest.status === 200) {
                let response = JSON.parse(movieRequest.responseText);

                if (response.Response === "True") {
                    document.getElementById("Movie").innerHTML = "Title: " + response.Title;
                    document.getElementById("Language").innerHTML = "Language: " + response.Language;
                    document.getElementById("Director").innerHTML = "Director: " + response.Director;
                    document.getElementById("Releasedyear").innerHTML = "Released: " + response.Released;
                    document.getElementById("Actors").innerHTML = "Actors: " + response.Actors;
                    document.getElementById("Country").innerHTML = "Country: " + response.Country;
                } else {
                    document.getElementById("Movie").innerHTML = "Movie not found";
                }
            } else {
                console.log("Error: " + movieRequest.status);
            }
        };
    } else {
        alert("Please enter a movie title.");
    }
};



















