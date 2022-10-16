// //need to handle expiring access_token
// refreshAccessToken()
access_token = window.sessionStorage.getItem('access_token');


async function newReleases(url){
    let response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token,
        }
    });
    let data = await response.json();
    return data;
}

async function enable_newReleases(){
    let offset = 0;
    let limit = 12;
    let market = 'US';
    let url = `${RELEASE_URL}?country=${market}&limit=${limit}&offset=${offset}`;
    let resp = await newReleases(url);

    let albums = resp['albums']
    let items = albums['items']

    for(let iter=0; iter<12; iter++){
        artists = items[iter]['artists'];
        let str='';
        for(let i=0; i<artists.length; i++){
            if(i==0){
                str = str + artists[i]['name'];
            }else{
                str = str + ", " +artists[i]['name']
            }
        }
       
        let selector_id = `card${iter}`;
        var x = document.getElementById(`${selector_id}`);
        x.querySelector("h5").innerHTML = items[iter]['name'];
        x.querySelector("p").innerHTML = str;
        x.querySelector("img").alt = items[iter]['name'];
        x.querySelector("img").src = items[iter]['images'][1]['url'];
        x.addEventListener("click",function(e){
            // alert("clicked");
            e.preventDefault();

            inputTrack.value = items[iter]['name']
            
            // var uuuu = "http://127.0.0.1:5000/audio?name=newReleases" + inputTrack.value + items[iter]['id'];
            // var uu = "http://127.0.0.1:5000/audio?name=newReleases&trk="+`${items[iter]['id']}`;
            
            // location.href = uu;
            
            location.href = items[iter]['external_urls']['spotify'];


            enable_searchItem(items[iter]['name'])
            console.log('a')
            console.log(search_trackNames)

            // let resolved_id = resolve_searchID(items[iter]['name'])
            resolved_id = 0;
            console.log('b')
            console.log(search_trackIDs)
            console.log(search_trackIDs[0])
            set_value(0)

            
        })
        // x.querySelector("a").target = "_blank"; 

    } 
        
}

function set_value(resolved_id){
    localStorage.setItem('trackDisplayName',search_display[resolved_id])
    localStorage.setItem('trackID',search_trackIDs[resolved_id])
    localStorage.setItem('artistIDs',search_artistIDs[resolved_id])
    localStorage.setItem('trackExplicit',search_trackExplicit[resolved_id])
    localStorage.setItem('trackReleaseDate',search_ReleaseDate[resolved_id])
    localStorage.setItem('trackPopularity',search_trackPopularity[resolved_id])
    localStorage.setItem('trackUrl',search_trackUrl[resolved_id])    

    let route_pass = search_trackIDs[resolved_id] + ',' + search_trackNames[resolved_id] + ',' + search_trackPopularity[resolved_id]
    localStorage.setItem('routePass',route_pass)
        
    input_hidden.value = route_pass
}

// var element = document.getElementById("card0");
// element.addEventListener("click",function(){
// alert("clicked");
// })

// const card1 = document.querySelector("#card1");
// console.log(card1);

// function release() {
//     var offset = 0;
//     var limit = 12;
//     var market = 'US'

//     var url = `${RELEASE_URL}?country=${market}&limit=${limit}&offset=${offset}`
//     // console.log(url)
//     response = fetch(url, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + access_token,
//         }
//     })
//     .then(res => res.clone().json())
//     .then(function (data) {
//         // console.log(data)
//         // localStorage.setItem("resp",data);
//         return data;
//     })
//     .then(function (resp) {
//         console.log(resp);

//         let albums = resp['albums']
//         let items = albums['items']
//         // console.log(items[0])
//         // console.log(items[0]['name'])
//         for(let iter=0; iter<12; iter++){
//             artists = items[iter]['artists']
//             let str=''
//             for(let i=0; i<artists.length; i++){
//                 if(i==0){
//                     str = str + artists[i]['name'];
//                 }else{
//                     str = str + ", " +artists[i]['name']
//                 }
//             }
//             // // console.log(str) 
//             // console.log(items[iter]['external_urls']['spotify'])
//             // console.log(items[iter]['images'][1]['url'])



//             let selector_id = `card${iter}`
//             // console.log(selector_id)
//             var x = document.getElementById(`${selector_id}`);
//             x.querySelector("h5").innerHTML = items[iter]['name'];
//             x.querySelector("p").innerHTML = str;
//             x.querySelector("img").alt = items[iter]['name'];
//             x.querySelector("img").src = items[iter]['images'][1]['url'];
//             x.querySelector("a").href = items[iter]['external_urls']['spotify']; 
//             x.querySelector("a").target = "_blank"; 

//         } 
        
//     })
// }
// release();


// let selector_id = `card${1}`
// var x = document.getElementById(`${selector_id}`);
// x.querySelector("h5").innerHTML = "TrackName";
// x.querySelector("h5").innerHTML = "TrackName";
// x.querySelector("p").innerHTML = "ArtistName";
// x.querySelector("img").alt = "TrackImage";
// x.querySelector("img").src = "https://i.scdn.co/image/ab67616d00001e02db2e767675059c95c7e85df8";
// x.querySelector("a").href = "https://open.spotify.com/album/1OedsPZaNzUJILkvivIYF7";


