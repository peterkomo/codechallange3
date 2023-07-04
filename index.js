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
