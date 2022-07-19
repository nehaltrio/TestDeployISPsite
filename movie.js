const sliders = document.querySelector(".swiper-wrapper");
var scrol1PerClick;
var ImagePadding = 20;
showMovieData();

async function showMovieData() {
  const api_key = "1dae035f4ab8d58ce196fa1576a348db";

  var result = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&sort_by=popularity.desc"
  );

  console.log(result);

  result = result.data.results;
  result.map(function (cur) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-slide"> <img src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" alt=""></div>
  `
    );
  });

  //   scrol1PerClick = document.querySelector(".img-1").clientWidth + ImagePadding;
}
