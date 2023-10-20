"use strict";
/* basic cross-page javascript */


/* navigation bar javascript below */
let isOpen = false;
const navBar = document.querySelector('.nav-item_special')
const navBarShow = document.querySelector('.nav-list')
const logo = document.querySelector('.logo')
const navContainer = document.querySelector('.nav-container')



function menuToggle(){
if (isOpen){
  
    // navBarShow.style.display = 'block';
    isOpen = false;
    navContainer.classList.remove('show')

} else {
    isOpen = true;
    navContainer.classList.add('show')
    // navBarShow.style.display = 'none';
}
}
navBar.addEventListener('click', function (){
    menuToggle();
})



/* index page javascript below */


/* about page javascript below */


/* our-team page javascript below */

// Array to hold people's names, links to images and description
const people = [
    {name:"Everest Shi", photo: 'images/charlotte-image.jpg', about: "I enrolled in SSD program because I like programming! I also enjoy learning database management and the skill of debugging. Beside I would like to explore the HTML, CSS and JavaScript skill."},
    {name:"Alex Fang", photo: './images/alex-aguilar.jpg', about: "I joined the SSD program because I enjoy programming and I wanted to learn more languages. I enjoy watching anime with friends and watching youtube videos or playing games."},
    {name:"Carissa Ward", photo: './images/carissa-ward.jpeg', about: "I enrolled in the SSD program because I wanted to switch to a career that would challenge me in a way that would keep me satisfied."},
    {name:"Maria Revelo", photo: './images/maria-revelo.jpg', about: "I joined the SSD program because I want to become a Full Stack Developer and I heard wonderful things about BCIT, very glad I did!."},
]

// A function called shuffleArray to shuffle array based on The Fisher-Yates shuffle algorithm 
function shuffleArray(myArray){
    for(let i = 0; i<myArray.length; i++){
        const j = Math.floor(Math.random()*(i+1));
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
    }
}

// The shuffleArray function being called on people array to shuffle it
shuffleArray(people);

const featuredProfile = document.getElementById("featured-profile");
const profileGroup1 = document.getElementById("profile-group1");
const profileGroup2 = document.getElementById("profile-group2");

// A loop to assign the items in the shuffled array to the featured-profile, profile-group1 and profile-group2 sections
for(let i = 0; i<people.length; i++){
    const article = document.createElement("article");
    article.setAttribute('id', "article"+(i+1));
    const img = document.createElement("img");
    img.setAttribute('class', "people-images");
    img.setAttribute('src', people[i].photo);
    const name = document.createElement('h2');
    name.setAttribute('class', 'people-name');
    name.textContent = people[i].name;
    article.appendChild(img);
    article.appendChild(name);
    if(i==0){
        const desc = document.createElement("p");
        desc.setAttribute('id',"feature-desc");
        desc.textContent = people[i].about;
        article.appendChild(desc);
        featuredProfile.appendChild(article);
    }

    else if(i==1 || i==2){
        profileGroup1.appendChild(article);
    }

    else{
        profileGroup2.appendChild(article);
    }
}

/* login form javascript below */