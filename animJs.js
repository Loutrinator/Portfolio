const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    box.style.transform = `translate(${scrollY}px, ${scrollY}px)`;
});