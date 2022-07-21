$(document).ready(function(){
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            let hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav'),
      closeElem = document.querySelector('.nav__close'),
      menuItem = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


menuItem.forEach(item => {
  item.addEventListener('click', () => {
      menu.classList.remove('active');
  })
});

