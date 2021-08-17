let image = document.getElementById("image")
getPhotos("curiosity","chemcam")

function getPhotos(rover,camera){
    const imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=dLsK5GbW63DisyWiTiwBNvOBP9tZSyHbghV9wOnL`
    fetch(imageUrl)
    .then(response => response.json())
    .then(imageBlob => {
    let i =Math.floor(Math.random()*imageBlob.photos.length)
        console.log(i)
        

        console.log(image.src);
        console.log(imageBlob)
        image.src=imageBlob.photos[i].img_src
    });
}

<button onclick="getElementById('photos').innerHTML()">Click me</button>

