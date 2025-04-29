const agents = [
    {
        name: "JETT",
        image: "./image/AGENT-PAGE/agent-img/FULL jett.png",
        link: "agent-jett.html"
    },
    {
        name: "GEKKO",
        image: "./image/AGENT-PAGE/agent-img/FULL gekko.png",
        link: "agent-gekko.html"
    },
    {
        name: "CLOVE",
        image: "./image/AGENT-PAGE/agent-img/FULL clove.png",
        link: "agent-clove.html"
    },
    {
        name: "OMEN",
        image: "./image/AGENT-PAGE/agent-img/FULL omen.png",
        link: "agent-omen.html"
    },
    {
        name: "SAGE",
        image: "./image/AGENT-PAGE/agent-img/FULL sage.png",
        link: "agent-sage.html"
    },
    {
        name: "ISO",
        image: "./image/AGENT-PAGE/agent-img/FULL iso.png",
        link: "agent-iso.html"
    },
]

const agentsContainer = document.querySelector(".agent-grid");

let agentsElements = '';

for(let i = 0; i < agents.length; i++){
    agentsElements += `
        <a href="${agents[i].link}">
            <div class="agent-card">
                <img src="${agents[i].image}" alt="">
        
                <h1>${agents[i].name}</h1>
            </div>
        </a>
    `;
}

agentsContainer.innerHTML = agentsElements;