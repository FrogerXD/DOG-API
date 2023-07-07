const API_RANDOM='https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_o9FGwQ98uxzojWMh4aAkSI9bjnx4faI0Wea3ioIYemROoeuNU1ORh3QaXufkGngd'
const API_RANDOM_1='https://api.thedogapi.com/v1/images/search?limit=1&api_key=live_o9FGwQ98uxzojWMh4aAkSI9bjnx4faI0Wea3ioIYemROoeuNU1ORh3QaXufkGngd'
const API_FAVORITES='https://api.thedogapi.com/v1/favourites?limit=10&api_key=live_o9FGwQ98uxzojWMh4aAkSI9bjnx4faI0Wea3ioIYemROoeuNU1ORh3QaXufkGngd'
const API_FAVORITES_DELETE = (id)=>`https://api.thedogapi.com/v1/favourites/${id}?api_key=live_o9FGwQ98uxzojWMh4aAkSI9bjnx4faI0Wea3ioIYemROoeuNU1ORh3QaXufkGngd`



const serror=document.getElementById('error')
/*
const btng1=document.getElementById('btn-dog-1')
const btng2=document.getElementById('btn-dog-2')
const btng3=document.getElementById('btn-dog-3')
const btng4=document.getElementById('btn-dog-4')
async function fetch_dog(url){
    const respose = await fetch(url, { method: "Get" })
    if (respose.status !==200){
        serror.textContent='Hubo un error'+respose.status
    }
    else{
        let data=await respose.json()
        const img1=document.getElementById('img-dog-1')
        img1.src= data[0].url
        const img2=document.getElementById('img-dog-2')
        img2.src= data[1].url
        const img3=document.getElementById('img-dog-3')
        img3.src= data[2].url
        const img4=document.getElementById('img-dog-4')
        img4.src= data[3].url
        const txt1=document.getElementById('id-dog-1')
        txt1.textContent += data[0].id;
        const txt2=document.getElementById('id-dog-2')
        txt2.textContent += data[1].id;
        const txt3=document.getElementById('id-dog-3')
        txt3.textContent += data[2].id;
        const txt4=document.getElementById('id-dog-4')
        txt4.textContent += data[3].id;

        btng1.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,data[0].id,data[0].url)})
        btng2.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,data[1].id,data[1].url)})
        btng3.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,data[2].id,data[2].url)})
        btng4.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,data[3].id,data[3].url)})
    }

}
*/

async function fetch_dog(url){
    const respose = await fetch(url, { method: "Get" })
    if (respose.status !==200){
        serror.textContent='Hubo un error'+respose.status
    }
    else{
        let data=await respose.json()
        data.forEach(dog =>{
            const sec=document.getElementById('dogs-id')
            const art=document.createElement('article')
            const img=document.createElement('img')
            const btn=document.createElement('button')
            const text=document.createTextNode('Guardame en favoritos')
            btn.appendChild(text)
            img.src=dog.url
            art.appendChild(img)
            art.appendChild(btn)
            sec.appendChild(art)
            art.className=('art-dog')
            art.id=dog.id
            console.log(dog)
            img.className=('img-dogs')
            btn.className='btn'
            btn.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,dog.id,dog.url,API_RANDOM_1)})
        })
    }
}


async function fetch_post_dog(url,id,im,url1){
    const respose = await fetch(url,{ 
        method: "POST" ,
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            image_id: id
        })
        
    })

    let data=await respose.json()
        console.log(data)

    if (respose.status !==200){
        serror.textContent='Hubo un error'+respose.status
    }
    else{
        
        const sec=document.getElementById('like-dogs-id')
        const art=document.createElement('article')
        const img=document.createElement('img')
        const btn=document.createElement('button')
        const text=document.createTextNode('Eliminar de favoritos')
        btn.appendChild(text)
        img.src=im
        art.appendChild(img)
        art.appendChild(btn)
        sec.appendChild(art)
        art.className=('art-dog-2')
        art.id=data.id
        img.className=('img-dogs')
        btn.className='btn-del-fav'
        btn.addEventListener('click',async()=>{await fetch_delete_dog(API_FAVORITES_DELETE(data.id),data.id)})

        const respose = await fetch(url1, { method: "Get" })
    if (respose.status !==200){
        serror.textContent='Hubo un error'+respose.status
    }
    else{
        let data=await respose.json()
        const secd=document.getElementById('dogs-id')
        const child=document.getElementById(id)
        secd.removeChild(child)
        data=data[0]
        console.log(data)
            const sec=document.getElementById('dogs-id')
            const art=document.createElement('article')
            const img=document.createElement('img')
            const btn=document.createElement('button')
            const text=document.createTextNode('Guardame en favoritos')
            btn.appendChild(text)
            img.src=data.url
            art.appendChild(img)
            art.appendChild(btn)
            sec.appendChild(art)
            art.className=('art-dog')
            art.id=data.id
            img.className=('img-dogs')
            btn.className='btn'
            btn.addEventListener('click',async()=>{await fetch_post_dog(API_FAVORITES,data.id,data.url,API_RANDOM_1)})
    }
    }


}


async function fetch_delete_dog(url,id){
    console.log(id)
    const respose = await fetch(url,{ 
        method: "DELETE" ,
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            
        })
        
    })
    if (respose.status !==200){
        serror.textContent='Hubo un error'+respose.status
    }
    else{
        const sec=document.getElementById('like-dogs-id')
        const child=document.getElementById(id)
        sec.removeChild(child)
    }
}


async function fetch_dog_fav(url){
    const respose = await fetch(url, { method: "Get" })
    if (respose.status !==200){
        serror.innerHTML='Hubo un error '+respose.status
    }
    else{
    const data=await respose.json()
    //sec.removeChild()
    data.forEach(dog => {
        const sec=document.getElementById('like-dogs-id')
        const art=document.createElement('article')
        const img=document.createElement('img')
        const btn=document.createElement('button')
        const text=document.createTextNode('Eliminar de favoritos')
        btn.appendChild(text)
        img.src=dog.image.url
        art.appendChild(img)
        art.appendChild(btn)
        sec.appendChild(art)
        art.className=('art-dog-2')
        art.id=dog.id
        img.className=('img-dogs')
        btn.className='btn-del-fav'
        btn.addEventListener('click',async()=>{await fetch_delete_dog(API_FAVORITES_DELETE(dog.id),dog.id)})
    });
    }
}

(async()=>{
    try{
        await fetch_dog(API_RANDOM)
        await fetch_dog_fav(API_FAVORITES)
    }catch(error){
        console.log(error)
    }
})()

const btn=document.querySelector('#btn-reload-dogs')
btn.addEventListener('click',async()=>{await fetch_dog(API_RANDOM)})


