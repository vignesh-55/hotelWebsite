import './modules/style.css';
import loadnav from './modules/loadNav.js';
import {loadMain} from './modules/loadMain.js';
import loadHome from './modules/loadHome.js';
import loadMenu from './modules/loadMenu.js';
import loadContact from './modules/loadContact.js';

const home = document.getElementById('home')

function removeSecChild(current){
// parent node error
    current.parentNode.removeChild(current);
}

function navTab(e){
    const current = e.target.innerText.toLowerCase(); 
    if(current === "home"){
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild(loadHome());
    }else if(current === "menu"){
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild(loadMenu());
    }else{
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild(loadContact());
    }
}

document.body.appendChild(loadnav());
document.body.appendChild(loadMain());
document.body.appendChild(loadHome());
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click',navTab);
});



// document.body.appendChild(loadMain());
// document.body.appendChild(loadHome());
// document.body.appendChild(loadMenu());
// document.body.appendChild(loadContact());

