import{api_key,endpoint,imgPath,paths} from"/module1.js";

const movieVideo=document.querySelector(".movieVideos");
const video_Details=document.querySelector(".video_detail");
const videoDetail=document.querySelector(".videoDetail");
const trailer_videos=document.querySelector(".trailer_videos");
const Videos=document.querySelector(".tralier_Video");
const icons=document.querySelector(".icons");
const trailer_Detail=document.querySelector(".trailer_Detail");
const seasons=document.querySelector(".seasons");
const action_button1 =document.querySelector(".action-button1");
const crossIcon=document.querySelector(".cross");
function fetchTrending() {
    fetch(paths.trending.url).then(res => res.json()).then(res => {
        const movies = res.results;
        const randomIndex = parseInt(Math.random() * movies.length);

        builtBannerSection(movies[randomIndex]);
    })
}

function builtBannerSection(movie) {
    var movieId = movie.id;
    console.log(movieId)
    fetch(`${endpoint}/movie/${movieId}/videos?api_key=${api_key}`).then(res => res.json()).then(item => {
        console.log(item)
        let movieKey = item.results[0].key
        console.log("djvshf");
        const bannerCont = document.getElementById("banner-section");
        bannerCont.innerHTML =
            `<iframe width="100%" height="100%"  class="iframe0" src="https://www.youtube.com/embed/${movieKey}?controls=0&mute=1&loop=1&autoplay=1&playlist=${movieKey}"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        const div = document.createElement('div');
        div.className = "bannerContent";
        div.innerHTML = ` <h2 class="banner-title">${movie.title}</h2>
<p class="banner-info">"Trending Movies"</p>
<p class="banner-overview">"${movie.overview}"</p>
<div class="action-button-cont">
    <button class="action-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Play"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>&nbsp;&nbsp; Play</button>


    <button class="action-button MoreInfo  text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-name="Info"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="white"></path></svg>&nbsp;&nbsp;More Info</button>
</div>`


        bannerCont.appendChild(div)
        const info_icon=document.querySelector(".MoreInfo ");
        console.log(info_icon)
    info_icon.addEventListener("click",(e)=>
    { 
        video_Details.style.display="block";
        movieVideos("movie", movieId,movieVideo);
        videoDetail.innerHTML=movie.overview;
    })
    const actionButton=document.querySelector(".action-button");
    actionButton.addEventListener("click",(e)=>
    {
        moveVideo('movie',movieId);
    })
    });
}

function fetchMoviesSection(fetch_url, category, api) {
    fetch(fetch_url).then(res => res.json()).then(res => {
        const movies = res.results;
        
        if (Array.isArray(movies)) {
            buildMoviesSection(movies, category, api)
        }
    })
}

function buildMoviesSection(list, categoryName, api) {

    const movieContainer = document.getElementsByClassName("container1")[0];
    const movieslistHTML = list.map(item => {
        var movie_id = item.id;
        console.log(movie_id)
        return `
<div class="movie_image" id="${movie_id}"  media="${api}"><img class="items" 
src="${imgPath}${item.backdrop_path}"
alt="${item.title}">
</div>
`

    }).join('');

    const sectionHTML = `
<h2 class="movie-heading">${categoryName}
<span class="explore">Explore All</span></h2>
<div class="movie-row owl-carousel owl-theme">
${movieslistHTML}</div>
</div>
`

    const movie_images=document.querySelectorAll(".movie_image");
    
    movie_images.forEach(item=>{
       
    item.addEventListener("mouseenter",(e)=>
    {
        console.log("dsbkb")
        console.log(item)
    var targetImage=e.target;
    console.log(targetImage)
    let movieId=targetImage.id
    let media=targetImage.getAttribute("media");
    display(targetImage,movieId,media);
    console.log(targetImage,movieId,media)
    })
})
        


    const div = document.createElement('div');
    div.className = "section";

    div.innerHTML = sectionHTML;
    movieContainer.appendChild(div);
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText:["<div class='nav-button  owl-prev'><</div>",
        "<div class='nav-button owl-next'>></div>"],
        
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
}


function display(current, id, api) {
    var rect=current.getBoundingClientRect();
    var left=rect.left;
    var right=rect.right;
    // var width=rect.width;
    var height=rect.height;
    var top=rect.top;
   var scrollTop = window.scrollY;
   var Totalheight=top+scrollTop-height;
   trailer_videos.style.position="absolute";
   trailer_videos.style.left=`${left}px`;
   trailer_videos.style.right=`${right}px`;
   trailer_videos.style.top=`${Totalheight}px`;
 
    movieVideos(api, id,Videos);
    movieDetails(api,id,icons);
   
    trailer_videos.style.display="block";
    
    if (api == "movie") {
        fetch(`${endpoint}/${api}/${id}?api_key=${api_key}`).then(res => res.json()).then(item => {
           
            console.log(item.overview)
            videoDetail.innerHTML="";
             videoDetail.innerHTML=item.overview;

            var genres = item.genres;
            trailer_Detail.innerHTML = "";
            genres.forEach(data => {
                const span = document.createElement("span");
                span.className = "span";
                console.log(span)
                console.log(data.name)
                span.innerHTML = data.name;
                trailer_Detail.appendChild(span)
            })

            var hours = parseInt((item.runtime / 60));
            var minutes = parseInt((item.runtime % 60));
            seasons.innerHTML = hours + "h " + minutes + "m";
        })
    }
    if (api == "tv") {
        fetch(`${endpoint}/${api}/${id}?api_key=${api_key}`).then(res => res.json()).then(item => {
                var genres = item.genres;
            trailer_Detail.innerHTML = "";
            genres.forEach(data => {
                const span = document.createElement("span");
                span.className = "span";
                console.log(span)
                console.log(data.name)
                span.innerHTML =data.name;
                trailer_Detail.appendChild(span)
            })

            if (item.number_of_seasons == 1) {
                console.log(item.number_of_seasons)
                console.log("feysj")
                seasons.innerHTML =item.number_of_episodes +" Episodes";
                
            }
            else {
                console.log("fdheysj")
                seasons.innerHTML= item.number_of_seasons +" Seasons";
            }
           
        
       
        })
    }
    
}

function moveVideo(api, id) {
    fetch(`${endpoint}/${api}/${id}/videos?api_key=${api_key}`).then(res => res.json()).then(item => {
            
        if (item.results.length > 0) {
            let moviekey = item.results[0].key
            console.log(item.results.length)
            location.href = `videoPage.html?movie_key=${moviekey}`;
        }
    })
}
function movieVideos(api, id,videoDiv){
    console.log(videoDiv)
    console.log(id)
    console.log(api)
    fetch(`${endpoint}/${api}/${id}/videos?api_key=${api_key}`).then(res => res.json()).then(item => {  
    console.log(item)
        if (item.results.length > 0) {
            let moviekey = item.results[0].key
            console.log(item.results.length)         
            videoDiv.innerHTML=
`<iframe width="100%" height="100%"  class="iframe1" src="https://www.youtube.com/embed/${moviekey}?controls=0&&loop=1&mute=1&autoplay=1&playlist=${moviekey}"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

action_button1.addEventListener("click",(e)=>
{
moveVideo(api,id);
})
const infoButton=document.querySelector(".info");
infoButton.addEventListener("click",(e)=>
{  
    video_Details.style.display="block";
    crossIcon.addEventListener("click",(e)=>
    {
        video_Details.style.display="none";
    })
    movieVideos(api, id,movieVideo);
})
        }
    })
}
function movieDetails(api,id,detailDiv)
{
detailDiv.innerHTML=`
<svg class="icons play_circle"  xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>
<svg class="icons" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
<svg class="icons" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
</svg>
<svg class="info" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
<div class="movie_details text-white"></div>
<div class="seasons text-white"></div>
</div>
 </div>`

 const play_circle=document.querySelector(".play_circle");
 play_circle.addEventListener("click",(e)=>
 {
    moveVideo(api,id);
 })
}

export{fetchTrending,builtBannerSection,fetchMoviesSection};