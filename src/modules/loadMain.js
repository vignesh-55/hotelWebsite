export const homePage = document.createElement('section');
homePage.classList.add('homePage');
homePage.setAttribute('id','home');

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

export function loadMain(){
    homePage.appendChild(img);
    return homePage;
}

