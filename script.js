let button = document.getElementById('toggleButton')
let content = document.getElementById('content__other')
let isContentVisible = false;

button.addEventListener('click', function(){
    if (isContentVisible){
    content.style.display = 'none'; 
        
        button.textContent = 'Показать все';
        isContentVisible = false;
    }else{
        content.style.display = 'block'
        button.textContent = 'Свернуть'
        isContentVisible = true;
        
    }
});

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

