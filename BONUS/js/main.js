const domCardStack = document.getElementById('our-team');

const objTeamArray = [
    {
        nome : "Wayne Barnett",
        role : "Founder & CEO",
        pict : "wayne-barnett-founder-ceo.jpg"

    },
    {
        nome : "Angela Caroll",
        role : "Chief Editor",
        pict : "angela-caroll-chief-editor.jpg"

    },
    {
        nome : "Walter Gordon",
        role : "Office Manager",
        pict : "walter-gordon-office-manager.jpg"

    },
    {
        nome : "Angela Lopez",
        role : "Social Media Manager",
        pict : "angela-lopez-social-media-manager.jpg"

    },
    {
        nome : "Scott Estrada",
        role : "Developer",
        pict : "scott-estrada-developer.jpg"

    },
    {
        nome : "Barbara Ramos",
        role : "Graphic Designer",
        pict : "barbara-ramos-graphic-designer.jpg"

    }
];


for(let i = 0; i < objTeamArray.length; i++){


        domCardStack.innerHTML += `<div class="col-4 p-2">
                                        <div class="card bg-white">
                                            <img src="./img/${objTeamArray[i].pict}" alt="${objTeamArray[i].nome}" class="card-img">
                                            <h2>${objTeamArray[i].nome}</h2>
                                            <div class="separator separator-sm"></div>
                                            <div class="caption">${objTeamArray[i].role}</div>
                                        </div>
                                    </div>`;


    

}
