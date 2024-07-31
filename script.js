let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

      menuContent.classList.toggle('on', show);
      show = !show; 
});

const icon = document.getElementById('whatsapp-icon');
icon.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(icon.href, '_blank');
});