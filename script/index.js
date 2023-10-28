'use strict';
/* basic cross-page javascript */

/* navigation bar javascript below */
let isOpen = false;
const navBar = document.querySelector('.nav-item_special');
const navBarShow = document.querySelector('.nav-list');
const logo = document.querySelector('.logo');
const navContainer = document.querySelector('.nav-container');

function menuToggle() {
  if (isOpen) {
    // navBarShow.style.display = 'block';
    isOpen = false;
    navContainer.classList.remove('show');
  } else {
    isOpen = true;
    navContainer.classList.add('show');
    // navBarShow.style.display = 'none';
  }
}
navBar.addEventListener('click', function () {
  menuToggle();
});

/* index page javascript below */

/* about page javascript below */
// Get references to the teaser images and the corresponding specifics sections
const activitiesTeaser = document.querySelector('.activities-text');
const eatTeaser = document.querySelector('.eat-text');
const relaxTeaser = document.querySelector('.relax-text');
const activitiesSpecifics = document.querySelector('.activities-specifics');
const eatSpecifics = document.querySelector('.eat-specifics');
const relaxSpecifics = document.querySelector('.relax-specifics');

// Add click event listeners to the teaser images
activitiesTeaser.addEventListener('click', () => {
  activitiesSpecifics.scrollIntoView({ behavior: 'smooth' });
});

eatTeaser.addEventListener('click', () => {
  eatSpecifics.scrollIntoView({ behavior: 'smooth' });
});

relaxTeaser.addEventListener('click', () => {
  relaxSpecifics.scrollIntoView({ behavior: 'smooth' });
});


/* our-team page javascript below */

// Array to hold people's names, links to images and description
const people = [
  {
    name: 'Everest Shi',
    photo: './images/everest-shi.jpg',
    about: 'About Everest'
  },
  { name: 'Alex Fang', photo: './images/alex-fang.jpg', about: 'About Alex' },
  {
    name: 'Carissa Ward',
    photo: './images/carissa-ward.jpeg',
    about:
      'I enrolled in the SSD program because I wanted to switch to a career that would challenge me in a way that would keep me satisfied.'
  },
  {
    name: 'Maria Revelo',
    photo: './images/maria-revelo.jpg',
    about:
      'I joined the SSD program because I want to become a Full Stack Developer and I heard wonderful things about BCIT, very glad I did!.'
  }
];

// A function called shuffleArray to shuffle array based on The Fisher-Yates shuffle algorithm
function shuffleArray(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
  }
}

// The shuffleArray function being called on people array to shuffle it
shuffleArray(people);

const featuredProfile = document.getElementById('featured-profile');
const profileGroup1 = document.getElementById('profile-group1');
// const profileGroup2 = document.getElementById("profile-group2");

// A loop to assign the items in the shuffled array to the featured-profile, profile-group1 and profile-group2 sections
const ourTeamMainElement = document.getElementById('our-team-main');
if (ourTeamMainElement) {
  for (let i = 0; i < people.length; i++) {
    const article = document.createElement('article');
    article.setAttribute('id', 'article' + (i + 1));
    const img = document.createElement('img');
    img.setAttribute('class', 'people-images');
    img.setAttribute('src', people[i].photo);
    const name = document.createElement('h2');
    name.setAttribute('class', 'people-name');
    name.textContent = people[i].name;
    article.appendChild(img);
    article.appendChild(name);
    if (i == 0) {
      const desc = document.createElement('p');
      desc.setAttribute('id', 'feature-desc');
      desc.textContent = people[i].about;
      article.appendChild(desc);
      featuredProfile.appendChild(article);
    }

    // else if(i==1 || i==2){
    //     profileGroup1.appendChild(article);
    // }
    else {
      profileGroup1.appendChild(article);
    }
  }
}

/* login form javascript below */
const searchDealMainElement = document.getElementById('search-deal-main');
if (searchDealMainElement) {
  //helper function for highlighting currently selected search tab and its filter menu
  function showSeachTabMenu(tabId) {
    const tabName = tabId.split('-')[1];
    //set click tab with active styling
    $('#search-cat-bar').find('a').removeClass('active');
    $(`#search-${tabName}-tab`).addClass('active');
    //show filter menu related to the category tab clicked
    $('#search-form-main').children('div').hide();
    $(`#search-${tabName}-menu`).show().css({ display: 'flex', padding: 0 });

    //make all input fill-in required
    console.log($('#search-form-main').find('input'));
    $('#search-form-main').find('input').attr('required',false);
    $(`#search-${tabName}-menu`).children().attr('required',true);

  }
  //add click event listener to the tabs in search form category bar
  $('#search-stay-tab').on('click', (e) =>
    showSeachTabMenu(e.currentTarget.id)
  );
  $('#search-flight-tab').on('click', (e) =>
    showSeachTabMenu(e.currentTarget.id)
  );
  $('#search-vehicle-tab').on('click', (e) =>
    showSeachTabMenu(e.currentTarget.id)
  );
  $('#search-package-tab').on('click', (e) =>
    showSeachTabMenu(e.currentTarget.id)
  );

  //add button scroll for recent search bar
  const rowElement = $('#recent-searches-row')[0];
  const itemElement = $('.search-item')[0];
  const itemWidth = itemElement.getBoundingClientRect().width;
  const $leftScrollElement = $('.left.scroll-button');
  const $rightSCrollElement = $('.right.scroll-button');
  //find tile item width (including margin) and use it as scroll offset
  var style = itemElement.currentStyle || window.getComputedStyle(itemElement);
  const itemMargin = parseFloat(style.marginRight);
  $leftScrollElement.on('click', () => {
    rowElement.scrollLeft -= itemWidth + 2 * itemMargin;
  });
  $rightSCrollElement.on('click', () => {
    rowElement.scrollLeft += itemWidth + 2 * itemMargin;
  });
}
