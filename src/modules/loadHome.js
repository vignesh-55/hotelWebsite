// const homePage = document.createElement('section');
// homePage.classList.add('homePage');
// homePage.setAttribute('id','home');

// const img = document.createElement('img');
// img.setAttribute('src','https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

import {homePage} from './loadMain.js';

const homeCont = document.createElement('div');
homeCont.classList.add('home');

const welcome = document.createElement('p');
welcome.classList.add('welcome');
welcome.innerText = "Welcome to our Hotel";

const about = document.createElement('div');
about.classList.add('about');
about.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto dignissimos amet eum, dolorem repudiandae eligendi, recusandae tempore iure iusto eaque veritatis ratione inventore assumenda cupiditate, natus sed similique saepe."

function loadHome(){
    // homePage.appendChild(img);
    homeCont.appendChild(welcome);
    homeCont.appendChild(about);
    homePage.appendChild(homeCont);
    return homePage;
}

export default loadHome;