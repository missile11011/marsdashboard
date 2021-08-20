let image = document.getElementById("image")
let apikey = "dLsK5GbW63DisyWiTiwBNvOBP9tZSyHbghV9wOnL"


function getPhotos(camera, num){
    const imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=${apikey}`
    fetch(imageUrl)
    .then(response => response.json())
    .then(imageBlob => {
    let i =Math.floor(Math.random()*imageBlob.photos.length)
        image.src=imageBlob.photos[num].img_src
        document.getElementById("length").textContent = "number of photos " + imageBlob.photos.length
        console.log(num)
    });
}

document.getElementById("photos").addEventListener("click", (e)=>{
    let camera = document.getElementById("camera").value
    let num = document.getElementById("photoNum").value
    if (num === ""){
        getPhotos(camera , "0")
    }
    else {
        getPhotos(camera , num-1)
    }
    
})


function spaceimage(){
    let apod = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
    fetch(apod)
    .then(response => response.json())
    .then(data => {
        document.getElementById("spaceImg").src = data.url;
        document.getElementById("spaceDscr").textContent = data.explanation
        document.getElementById("title").textContent = data.title
    })
}

spaceimage()

