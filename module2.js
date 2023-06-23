import{api_key,endpoint,imgPath,paths} from"/module1.js";
var tvApi =
{
    TV_Dramas:
    {
        url: `${endpoint}/discover/tv?api_key=${api_key}`,
        name: "TV Dramas"
    },
}
export{tvApi};