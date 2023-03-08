const domMsgBox = document.querySelector(".msg-list");

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
    for (let objKeys in objTeamArray[i]){
        console.log(objTeamArray[i][objKeys]);

        const newListItem = document.createElement('li');
        newListItem.innerText = objTeamArray[i][objKeys];
        domMsgBox.append(newListItem);
    }

}
