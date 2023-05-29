let button = document.getElementById('toggleButton')
let content = document.getElementById('content__other')
let buttonArrow = document.getElementById('buttonArrow');
let isContentVisible = false;


button.addEventListener('click', function(){
    if (isContentVisible){
    content.style.display = 'none'; 
    buttonArrow.classList.remove('rotate-180');
        button.textContent = 'Показать все';
        isContentVisible = false;
    }else{
        content.style.display = 'block'
        button.textContent = 'Свернуть'
        buttonArrow.classList.add('rotate-180');
        isContentVisible = true;
        
    }
});



var swiper = new Swiper('.swiper-container', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true
      
    },
  });
  

