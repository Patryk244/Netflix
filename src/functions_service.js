import tv from './img/tv.jpg'
import show_mobile from './img/show_mobile.jpg'
import device_pile from './img/device_pile.jpg'
import kids from './img/kids.jpg'
import netflix from './img/netflix-jpg.jpg'
const loadingImage = () => {
    let source = [tv, show_mobile, device_pile, kids];
    const img = Array.from(document.querySelectorAll('.try'));
    const rev = document.querySelector('.first_review');
    source.forEach((value, index) => {
        img[index].setAttribute('src', `${source[index]}`);
    })
    rev.style.backgroundImage = `url(${netflix})`;
}

window.addEventListener('load', loadingImage);