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
