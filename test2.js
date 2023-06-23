
import{paths} from"./module1.js";
import{fetchTrending,builtBannerSection,fetchMoviesSection} from"./module3.js";

fetchTrending();

for (var item in paths) {
    console.log(paths[item].url, paths[item].name)
    fetchMoviesSection(paths[item].url, paths[item].name, "movie");
}

function remove() {
    trailer_videos.style.display="none";
}
trailer_videos.addEventListener("mouseleave",(e)=>
{
remove();
})
console.log(paths)










































