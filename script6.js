const videoCont=document.querySelector(".videoCont");  
const urlParams=new URLSearchParams(window.location.search);
const moviekey=urlParams.get("movie_key")
console.log(moviekey)
    console.log(videoCont)
videoCont.innerHTML=
`<iframe width="100%" height="100%"  class="iframe" src="https://www.youtube.com/embed/${moviekey}?controls=0&&loop=1&autoplay=1&playlist=${moviekey}"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
