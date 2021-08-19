let image = document.getElementById("image")
let apikey = "dLsK5GbW63DisyWiTiwBNvOBP9tZSyHbghV9wOnL"


function getPhotos(rover,camera){
    const imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=${apikey}`
    fetch(imageUrl)
    .then(response => response.json())
    .then(imageBlob => {
    let i =Math.floor(Math.random()*imageBlob.photos.length)
        image.src=imageBlob.photos[i].img_src
    });
}

document.getElementById("photos").addEventListener("click", (e)=>{
    let camera = document.getElementById("camera").value
    getPhotos("curiosity", camera)
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

