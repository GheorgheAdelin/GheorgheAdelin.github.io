document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp(){
    galeria();
    scrollNav();
}
function scrollNav(){
 const enlaces = document.querySelectorAll('.navegacionPrincipal a')  
 enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            
            const seccionScroll = document.querySelector(e.target.attributes.href.value);
            seccionScroll.scrollIntoView({behavior: "smooth"});
        });
    });

}
function galeria(){
    const galeria=document.querySelector('.galeria_imagenes');
    for (let i=1; i<=12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML=`
         <img src="img/thumb/${i}.jpg" alt="imagen galeria">
         `;
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }

}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML=`
         <img src="img/grande/${id}.jpg" alt="imagen galeria">
         `;
//Crea el overlay con la imagen mas grande
         const overlay = document.createElement('DIV');
         overlay.appendChild(imagen);
         overlay.classList.add('overlay');	
//Boton para cerrar el modal
const cerrarModal = document.createElement('P');
cerrarModal.textContent='X';
cerrarModal.classList.add('btn-cerrar');
cerrarModal.onclick = function(){
    overlay.remove();
    body.classList.remove('fijarBody');

}

overlay.appendChild(cerrarModal);
//Añadela al HTML
         const body = document.querySelector('body');
         body.appendChild(overlay);
         body.classList.add('fijarBody');
}