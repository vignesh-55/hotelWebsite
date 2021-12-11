// import { HotModuleReplacementPlugin } from "webpack";
import {homePage} from './loadMain.js';

// const menu = document.createElement('section');
// menu.classList.add('menu');
// menu.setAttribute('id','menu');

// const menuTitle = document.createElement('div');
// menuTitle.classList.add('menuTitle');
// menuTitle.textContent = "Taste our signature dishes";
// menu.appendChild(menuTitle);

const itemsArr = [
    {
        dir: "North Food",
        item1: "Chole Bhature",
        item2: "Chole Kulche",
        item3: "Paneer Butter Masala"
    },
    {
        dir: "South Meals",
        item1: "Idli Vada Dosa",
        item2: "Porotta Poori Idiyappam",
        item3: "Arusuvai Saapadu"
    },
    {
        dir: "West Chaats",
        item1: "Gol Gappa Kachori",
        item2: "Paav Baaji Dabeli",
        item3: "Vaada Paav Sandwich"
    },
    {
        dir: "East Soups",
        item1: "Mushroom Soups",
        item2: "Mixed Vegetables Soup",
        item3: "Green Healthy Salads"
    }
];

function loadMenu(){
    const menu = document.createElement('section');
    menu.classList.add('menu');
    menu.setAttribute('id','menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = "Taste our signature dishes";
    menu.appendChild(menuTitle);

    for(let i = 0;i<itemsArr.length;i++){
        const items = document.createElement('div');
        items.classList.add('items');
        const lists = document.createElement('div');
        lists.classList.add('list');

        for(let key in itemsArr[i]){
            if(key == "dir"){
                const dir = document.createElement('div');
                dir.classList.add('dir');
                dir.textContent = itemsArr[i][key];
                items.appendChild(dir);
            }else{
                const li = document.createElement('li');
                li.textContent = itemsArr[i][key];
                lists.appendChild(li);
            }
        }
        items.appendChild(lists);
        menu.appendChild(items);
    }
    homePage.appendChild(menu)
    return homePage;
}

export default loadMenu;