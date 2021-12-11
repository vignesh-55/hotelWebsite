import {homePage} from './loadMain.js';

// const contact = document.createElement('div');
// contact.classList.add('contact');
// contact.setAttribute('id','contact');

// const contactUs = document.createElement('div');
// contactUs.setAttribute('id','contactUs');
// contactUs.textContent = "Contact Us";

// const details = document.createElement('div');
// details.classList.add('details');

// function loadContact(){
    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162559.98589045354!2d-73.91012066780375!3d40.79336812920404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4684fe87469%3A0xd933e2cf2f45dbdd!2sKFC!5e0!3m2!1sen!2sin!4v1639227706203!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy`;
//     contact.appendChild(map);
//  return contact;
// }

const detailInfo = [
    {
        mode: "Email",
        id: ": absuh541@gmail.com"
    },
    {
        mode: "Mobile No.",
        id: ": +91-67658 90097"
    },
    {
        mode: "Address",
        id: ": No 4/34, Opp ABC Theater, Nowhere, But Here."
    }
];

function loadContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.setAttribute('id','contact');
    
    const contactUs = document.createElement('div');
    contactUs.setAttribute('id','contactUs');
    contactUs.textContent = "Contact Us";
    
    const details = document.createElement('div');
    details.classList.add('details');

    for(let i = 0;i<detailInfo.length;i++){
        const li = document.createElement('li');
        const line = `<span class="thagaval">${detailInfo[i]['mode']}</span>${detailInfo[i]['id']}`;
        li.innerHTML = line;
        details.appendChild(li);
    }
    contact.appendChild(contactUs);
    contact.appendChild(details);
    contact.appendChild(map);
    homePage.appendChild(contact);
    return homePage;
    // return contact;
}

export default loadContact;