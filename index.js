function moviestheater() {
    // Fetch movie data from the specified URL an api
    fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((arts) => {
        // Get the HTML element with id "films" under ul element
        const flatdango = document.getElementById("films");

        // Iterate over each movie
        arts.forEach((movie) => {
            // Create a new list item
            const list = document.createElement("li");
            flatdango.appendChild(list);

            // Create an anchor element
            const anchor = document.createElement("a");
            anchor.href = "http://localhost:3000/films";
            list.appendChild(anchor);

            // Set the text content of the anchor with movie title and ID
            anchor.textContent = `${movie.title}, ${movie.id}`;

            // Add an event listener to the anchor
            anchor.addEventListener("click", (e) => {
                // Prevent the default behavior of the anchor click event
                e.preventDefault();

                // Call the displayMovieDetails function with the movie object
                displayMovieDetails(movie);
            });
        });
    });
}
function displayMovieDetails(movie) {
    // Set the source of the "poster" image element to the movie's poster URL
    document.querySelector("#poster").src = movie.poster;

    // Set the text content of the "title" element to the movie's title
    document.querySelector("#title").textContent = movie.title;

    // Set the text content of the "runtime" element to the movie's runtime in minutes
    document.querySelector("#runtime").textContent = `Runtime: ${movie.runtime}min`;

    // Set the text content of the "showtime" element to the movie's showtime
    document.querySelector("#showtime").textContent = `Showtime: ${movie.showtime}`;

    // Set the text content of the "description" element to the movie's description
    document.querySelector("#description").textContent = movie.description;
}

