const api_key = "d7d937a7db153daaf2f17da4c190f375";
const endpoint = "https://api.themoviedb.org/3";
const imgPath = "http://image.tmdb.org/t/p/original"; 

const paths =
{
    trending: {
        url: `${endpoint}/trending/all/day?api_key=${api_key}`,
        name: "Trending Now"
    },

    hollywood_movies:
    {
        url: `${endpoint}/discover/movie?api_key=${api_key}&with_genres=9648`,
        name: "Hollywood Movies"
    },
    bollywood_movies:
    {
        url: `${endpoint}/discover/movie?api_key=${api_key}&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi
`,
        name: "Bollywood Movies"
    },
    Blockbuster_movies:
    {
        url: `${endpoint}/discover/movie?api_key=${api_key}&with_genres=10402`,
        name: "Blockbuster Movies"
    },
    Sci_Fi:
    {
        url: `${endpoint}/discover/movie?api_key=${api_key}&with_genres=10749`,
        name: "TV Sci-Fi & Horror"
    },
    New_releases:
    {
        url: `${endpoint}/discover/movie?api_key=${api_key}&with_genres=10751`,
        name: "New Releases"
    },
}

export{api_key,endpoint,imgPath,paths};