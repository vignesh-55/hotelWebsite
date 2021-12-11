const secNav = document.createElement('section');
secNav.classList.add('navBar');

const navTitle = document.createElement('div');
navTitle.classList.add('title');

const navLinks = ["Home","Menu","Contact"];

function loadnav(){
    navTitle.innerText = "India's Pride";
    secNav.appendChild(navTitle);
    const ul = document.createElement('ul');
    for(let i = 0;i<navLinks.length;i++){
        const li = document.createElement('li');
        li.classList.add('navLinks')
        const a = document.createElement('a');
        a.href = `#${navLinks[i].toLowerCase()}`;
        a.innerText = navLinks[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    secNav.appendChild(ul);
    console.log(secNav);
    return secNav;
}

export default loadnav;