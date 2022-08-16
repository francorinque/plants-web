const iconToggle = document.getElementById('toggle');
const mobile = document.getElementById('mobile');

iconToggle.addEventListener('click', ()=>{
  mobile.classList.toggle('mostrar')
})