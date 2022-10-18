'use strict';

let api_key = "5ded574a864b45148274ffb0adc49f2c";
 
let curr_url = `https://newsapi.org/v2/everything?q=songs&domains=billboard.com&language=en&apiKey=${api_key}`


fetch(curr_url).then((res)=>{
    return res.json()
}).then((data)=>{
   return data["articles"]
}).then((articles)=>{
   for(let i=0;i<9;i++){
       console.log(articles[i]["title"])
       console.log(articles[i]["url"])
       console.log(articles[i]["urlToImage"])
       let card_id=`cards${i}`;
       var y = document.getElementById(`${card_id}`);
       y.querySelector("img").src=articles[i]["urlToImage"];
       y.querySelector("h4").innerHTML=articles[i]["title"];
       y.querySelector("img").src=articles[i]["urlToImage"];
       

       let linkcard_id=`linkcards${i}`;
       var z = document.getElementById(`${linkcard_id}`);
       z.querySelector("a").href=articles[i]["url"];

   }
})
