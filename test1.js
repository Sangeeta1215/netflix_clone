
import{paths} from"./module1.js";
import{tvApi} from"./module2.js";
import{fetchTrending,builtBannerSection,fetchMoviesSection} from"./module3.js";



fetchTrending();


for (var item in paths) {
    console.log(paths[item].url, paths[item].name)
    fetchMoviesSection(paths[item].url, paths[item].name, "movie");
}
for (var item in tvApi) {
    fetchMoviesSection(tvApi[item].url, tvApi[item].name, "tv");
}


export{movieVideo,video_Details,videoDetail,Videos,icons,trailer_Detail,seasons,action_button1,trailer_videos};









































