function moviesTheater() {
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
// Get the capacity of the movie theater
const availability = movie.capacity;

// Get the number of tickets already purchased for the movie
const ticketsPurchased = movie.tickets_sold;

// Calculate the number of available tickets for the movie
let availableTickets = availability - ticketsPurchased;

// Get the HTML element with id "availableTickets"
const availableTicketsElement = document.querySelector("#availableTickets");

// Get the HTML element with id "buyTickets"
const ticketButton = document.querySelector("#buyTickets");

// Check if there are available tickets
if (availableTickets > 0) {
    // Update the text content of the "availableTicketsElement" with the available tickets count
    availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;

    // Update the text content of the "ticketButton" to indicate buying tickets
    ticketButton.textContent = "Buy Tickets";

    // Enable the ticket button
    ticketButton.disabled = false;
} else {
    // Update the text content of the "availableTicketsElement" to indicate that tickets are sold out
    availableTicketsElement.textContent = "SOLD OUT";

    // Update the text content of the "ticketButton" to indicate that tickets are sold out
    ticketButton.textContent = "Sold Out";

    // Disable the ticket button
    ticketButton.disabled = true;
}
// Add a click event listener to the ticketButton
ticketButton.addEventListener("click", (am) => {
    // Prevent the default behavior of the click event
    am.preventDefault();

    // Check if there are available tickets
    if (availableTickets > 0) {
        // Decrement the availableTickets count
        availableTickets--;

        // Update the text content of the "availableTicketsElement" with the updated available tickets count
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;

        // Check if the availableTickets count reaches 0
        if (availableTickets === 0) {
            // Update the text content of the "ticketButton" to indicate "Sold Out"
            ticketButton.textContent = "Sold Out";

            // Disable the ticket button
            ticketButton.disabled = true;
        }
    }
});
// Defined  the init function
function init() {
    // Call the moviesTheater function
    moviesTheater();
}
// Added a DOMContentLoaded event listener to the document
document.addEventListener("DOMContentLoaded", init);