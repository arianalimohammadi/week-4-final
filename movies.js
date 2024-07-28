const movieListEl = document.querySelector(".movie__list");

async function main(search) {
  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=5f7402b0&s=${search}`
  );
  const movieData = await movie.json();
  console.log(search)
  const movies = movieData.Search.slice(0, 6);
  movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
}

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
  if (event.target.value === "Latest-Movies") {
    sortNewToOld(movies);
  } else if (event.target.value === "Oldest-Movies") {
    sortOldToNew(movies);
  }

  movieListEl.innerHTML = movies.map((movie) => movieHTML(movie)).join("");
}

function sortNewToOld(movies) {
  return movies.sort((a, b) => b.Year - a.Year);
}

function sortOldToNew(movies) {
  return movies.sort((a, b) => a.Year - b.Year);
}
