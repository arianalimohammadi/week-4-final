const movieListEl = document.querySelector(" .movie__list");

async function main() {
  const movie = await fetch("https://www.omdbapi.com/?apikey=5f7402b0&s=fast");
  const movieData = await movie.json();
  const movies = movieData.Search.slice(0, 6); 
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}

main();


function movieHTML(movie) {
  return `<div class="movie">
        <figure>
            <img class="movie__img" src="${movie.Poster}" alt="">
        </figure>
        <h3 class="movie__name">${movie.Title}</h3>
        <p class="movie__year">${movie.Year}</p>
    </div>`;
}


// SORT

async function filterMovies(event) {
    const promise = await fetch("https://www.omdbapi.com/?apikey=5f7402b0&s=fast");
    const result = await promise.json();
    let movies = result.Search.slice(0, 6); 
  
    if (event.target.value === "Latest-Movies") {
      movies = sortNewToOld(movies);
    } else if (event.target.value === "Oldest-Movies") {
      movies = sortOldToNew(movies);
    }
  
    movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
  }


filterMovies(6);


function sortNewToOld(movies) {
  return movies.sort((a, b) => b.Year - a.Year);
}

function sortOldToNew(movies) {
  return movies.sort((a, b) => a.Year - b.Year);
}

