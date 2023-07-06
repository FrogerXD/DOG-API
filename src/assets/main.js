const API='https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_o9FGwQ98uxzojWMh4aAkSI9bjnx4faI0Wea3ioIYemROoeuNU1ORh3QaXufkGngd'


async function fetch_dog(url){
    const respose = await fetch(url, { method: "Get" })
    let data=await respose.json()
    console.log(data)
    const img1=document.getElementById('img-dog-1')
    img1.src= data[0].url
    const img2=document.getElementById('img-dog-2')
    img2.src= data[1].url
    const img3=document.getElementById('img-dog-3')
    img3.src= data[2].url
    const img4=document.getElementById('img-dog-4')
    img4.src= data[3].url
}


/*fetch(API,{method: 'Get'})
.then(res=> res.json())
.then(data =>{
    const img=document.querySelector('img')
    img.src= data.message
})*/

(async()=>{
    try{
        await fetch_dog(API)
    }catch(error){
        console.log(error)
    }
})()

const btn=document.querySelector('#btn-reload-dogs')
btn.addEventListener('click',async()=>{await fetch_dog(API)})


