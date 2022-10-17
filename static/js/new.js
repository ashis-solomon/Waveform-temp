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
    let albumstring=''
    const songimgs=[]
    let offset = 0;
    let limit = 12;
    let market = 'IN';
    let url = `https://api.spotify.com/v1/browse/new-releases?country=${market}&limit=${limit}&offset=${offset}`;
    let resp = await newReleases(url);

    let albums = resp['albums']
    console.log(albums)
    let items = albums['items']
    console.log(items)
    for(let i=0;i<items.length;i++){
         albumstring=albumstring+items[i]["id"]+'%2C'
         songimgs.push(items[i]["images"][1]["url"])
    }
    console.log(albumstring)
    albumstring=albumstring.slice(0, -3);
    console.log(albumstring)
    
    let albumurl=`https://api.spotify.com/v1/albums?ids=${albumstring}&market=US`
    console.log(albumurl)

    //https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=US


    enablex_trackids(albumurl,songimgs)
}


async function getx_trackids(url,access_token) {
    let response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token,
        }
    });
    let data = await response.json()
    return data;
}

async function enablex_trackids(albumurl,songimgs) {
    let artistidsx = {}
    let artistnamesx={}
    const songx_ids=[]
    const songx_names=[]
    let artist_string=''
    let artist_name_string=''
    let jsondata = await getx_trackids(albumurl,access_token)  
    console.log(jsondata["albums"][0]["tracks"]["items"][12]) 
    for(let i=0;i<jsondata["albums"].length;i++){
        songx_ids.push(jsondata["albums"][i]["tracks"]["items"][0]["id"])
        songx_names.push(jsondata["albums"][i]["tracks"]["items"][0]["name"])
    }
    console.log(songx_ids)
    console.log(songx_names)
    for(let i=0;i<jsondata["albums"].length;i++){
        artist_string=''
        artist_name_string=''
        for(let j=0;j<jsondata["albums"][i]["tracks"]["items"][0]["artists"].length;j++){
            artist_string=artist_string+jsondata["albums"][i]["tracks"]["items"][0]["artists"][j]["id"]+","
            artist_name_string=artist_name_string+jsondata["albums"][i]["tracks"]["items"][0]["artists"][j]["name"]+", "
        }
        artistidsx[i]=artist_string.slice(0,-1)
        artistnamesx[i]=artist_name_string.slice(0,-2)
    }
    console.log(artistidsx)
    console.log(artistnamesx)
    console.log(songimgs)
    for(let iter=0; iter<12; iter++){
       
       
        let selector_id = `card${iter}`;
        var x = document.getElementById(`${selector_id}`);
        x.querySelector("h5").innerHTML = songx_names[iter];
        x.querySelector("p").innerHTML = artistnamesx[iter]
        x.querySelector("img").alt = songx_names[iter];
        x.querySelector("img").src = songimgs[iter];
        x.addEventListener("click",function(e){
            // alert("clicked");
            e.preventDefault();

            inputTrack.value = songx_names[iter]
            
            // var uuuu = "http://127.0.0.1:5000/audio?name=newReleases" + inputTrack.value + items[iter]['id'];
            // var uu = "http://127.0.0.1:5000/audio?name=newReleases&trk="+`${items[iter]['id']}`;
            
            // location.href = uu;
            // https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g
            location.href = `https://open.spotify.com/track/${songx_ids[iter]}`


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
    //return avg_value_dict


    /*for(let iter=0; iter<12; iter++){
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

    }*/ 
        
}





























/*async function newReleases(url){
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
    let resp = await searchItem(url);

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
        
}*/

/*function set_value(resolved_id){
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

// var element = document.getElementById("card0");*/
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