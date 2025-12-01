const mantaanim = document.querySelector('.manta-anim');

window.addEventListener('wheel', () => {
    const scrollY = window.scrollY * 0.2;
    mantaanim.style.transform = `translate(${scrollY*1.58}px, -${scrollY}px)`;
});

const mticketanim = document.querySelector('.mticket-anim');


function animateMticket() {
    const scrollY = window.scrollY * 0.1;
    const rotateDeg = 15.0 - scrollY*0.05;
    //mticketanim.style.transform = `translate(${scrollY*0.25}px, -${scrollY}px)`;
    mticketanim.style.rotate = `${rotateDeg}deg`;
}
window.addEventListener('wheel', () => {
    animateMticket();
});
