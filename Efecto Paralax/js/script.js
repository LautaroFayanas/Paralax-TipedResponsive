

// Efecto Menu TOOGLE 
document.getElementById('icon_menu').addEventListener('click' , mostrar_menu);
function mostrar_menu(){
    document.querySelector('.menu').classList.toggle('mostrar_menu');
}

// Efecto Scroll
window.onscroll = function(){
    const posicion = window.pageYOffset || document.documentElement.scrollTop;
    const elemento1 = document.getElementById('icon_heart');
    const elemento2 = document.getElementById('icon_fire');
    elemento1.style.bottom = posicion * 0.3 + 'px';
    elemento2.style.bottom = posicion * 0.1 + 'px';
}

