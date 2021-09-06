const API_KEY = "97077414659de8234eda6c75245d59c3";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchdocumentryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchtopratedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests;