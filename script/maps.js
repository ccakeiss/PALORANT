const maps = [
    {
        image: "./image/maps/tumbnail/image.png",
        name: "LOTUS",
        link: "maps-lotus.html"
    },
    {
        image: "./image/maps/tumbnail/image-1.png",
        name: "BREEZE",
        link: "maps-breeze.html"
    },
    {
        image: "./image/maps/tumbnail/image-2.png",
        name: "ICE BOX",
        link: "maps-icebox.html"
    },
    {
        image: "./image/maps/tumbnail/image-3.png",
        name: "SUNSET",
        link: "maps-sunset.html"
    },
    {
        image: "./image/maps/tumbnail/image-4.png",
        name: "PEARL",
        link: "maps-pearl.html"
    },
]

const mapsContainer = document.querySelector(".maps-grid");

let mapsElement = '';

for(let i=0 ; i<maps.length ; i++){
    mapsElement += `
        <a href="${maps[i].link}">
            <div class="maps-box">
                <img src="${maps[i].image}" alt="">

                <h1>${maps[i].name}</h1>
            </div>
        </a>
    `
}

mapsContainer.innerHTML = mapsElement;