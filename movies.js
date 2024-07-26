const movieListEl = document.querySelector(" .movie__list");

async function main() {
  const movie = await fetch("https://www.omdbapi.com/?apikey=5f7402b0&s=fast");
  const movieData = await movie.json();
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

  const result = await promise.json()

  const movie = result.filter(elem => !elem.movie).slice(0, 6);
}

filterMovies(6);


function sortNewToOld(movie) {
  return movie.sort((a, b) => b - a);
}

console.log([`${movie.Year}`]);


function sortOldToNew(movie) {
  return movie.sort((a, b) => a - b);
}

console.log([`${movie.Year}`]);
