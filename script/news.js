const news = [
    {
        image: "./image/news/image.png",
        title: "Introducing the 2025 PCT Season Capsule!",
        type: "games update",
        desc: "Introducing the all new PCT 2025 Season Capsule, a celebration of the competitive season and a new way to represent your region and home league in PALORANT! ",
        date: "march 28, 2025",
        link: "news-detail.html"
    },
    {
        image: "./image/news/image-1.png",
        title: "Community ROUND UP&#58; first episode",
        type: "community",
        desc: "Hello and welcome to the VALORANT Community Round up, a new ongoing series.",
        date: "march 18, 2025",
        link: "news-detail2.html"
    },
    {
        image: "./image/news/image-2.png",
        title: "Masters Bangkok MERCH COLLECTION",
        type: "event",
        desc: "The next major stop on the 2025 PALORANT Champions Tour is Masters Bangkok!",
        date: "march 08, 2025",
        link: "news-detail3.html"
    },
    {
        image: "./image/news/image-3.png",
        title: "State of the Agents&#58; March 2024",
        type: "dev",
        desc: "We wanted to check in and talk with you about the state of VALORANT in terms of Agent balance.",
        date: "march 01, 2025",
        link: "news-detail4.html"
    },
    {
        image: "./image/news/image-4.png",
        title: "PALORANT Patch Notes 9.07",
        type: "games update",
        desc: "We've made a few updates to Astra’s Cosmic Divide and Cypher’s Spycam, fixed various bugs, and added new text and visual descriptions.",
        date: "february 28, 2025",
        link: "news-detail5.html"
    },
    {
        image: "./image/news/image-5.png",
        title: "Community Roundup&#58; Clove",
        type: "community",
        desc: "Controller, Clove, became playable in-game, but even before all that people got their first taste of our Scottish Agent.",
        date: "february 18, 2025",
        link: "news-detail6.html"
    },
    {
        image: "./image/news/image-6.png",
        title: "PALORANT Pros Make 2025 Player Tier Lists",
        type: "event",
        desc: "The On The Spike YouTube channel has released a new video where professional PALORANT players rank the top players heading into the 2025 season.",
        date: "february 08, 2025",
        link: "news-detail7.html"
    },
    {
        image: "./image/news/image-7.png",
        title: "Vanguard 'Bans-Per-Second' Record.",
        type: "dev",
        desc: "Greetings travelers, I’m Phillip “mirageofpenguins” Koskinas, a data-based anti-cheater on the Vanguard team @Giot.",
        date: "february 01, 2025",
        link: "news-detail8.html"
    },
    {
        image: "./image/news/image-8.png",
        title: "PALORANT Patch Notes 9.10",
        type: "games update",
        desc: " How are you liking Gekko and his buddies so far? Either way, with each new Agent comes many new bugs to fix and updates to deploy.",
        date: "january 28, 2025",
        link: "news-detail9.html"
    },
    {
        image: "./image/news/image-9.png",
        title: "Community Roundup: january 2025",
        type: "community",
        desc: "We had some very cute Halloween-themed in-game items this year from the Living the Nightmare player card to the Troublemaker bundle. ",
        date: "january 18,2025",
        link: "news-detail10.html"
    },
    {
        image: "./image/news/image-10.png",
        title: "Macao Open: WHAT You Need to Know",
        type: "event",
        desc: "The largest TFT community and competitive event of the year is just around the corner!",
        date: "january 08, 2025",
        link: "news-detail11.html"
    },
    {
        image: "./image/news/image-11.png",
        title: "PALORANT Patch Notes 10.03",
        type: "DEV",
        desc: "This week's patch is another small one as we get closer to Masters Bangkok Finals. In it, you'll find some small updates.",
        date: "january 01, 2025",
        link: "news-detail12.html"
    },
]

const newsContainer = document.querySelector(".news-grid");
const seeMoreBtn = document.querySelector(".green-button");

let newsElements = '';
let start = 0;
let newslen = news.length;

function display(){
    for(let i = start; i < start+4; i++){
        newsElements += `
            <a href="${news[i].link}">
                <div class="news-box-small">
                    <div class="cover-overlay-small">
                        <img src="${news[i].image}" alt="">
                    </div>
                        
                    <img class="game-logo-small" src="image/logo.png">
                            
                    <div class="desc-box-small">
                                
                            <div class="text-desc-small">
                                <h1>${news[i].title}</h1>
                                <p class="news-type-small">${news[i].type}</p>
                                <p class="short-desc-small">${news[i].desc}</p>
                                <p class="news-date-small">${news[i].date}</p>
                            </div>
                    </div>
                </div>
            </a>
        `;
    }
}

display();
newsContainer.innerHTML = newsElements;

seeMoreBtn.addEventListener("click", function(e){
    start += 4;

    
    display();
    newsContainer.innerHTML = newsElements;

    if(start+4 == newslen){
        seeMoreBtn.style.display = "none";
        return;
    }
})

