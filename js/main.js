//slider
let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
   showSlides(slideIndex);

   
   setInterval(function () {
       plusSlides(1); 
   }, 10000000);
});


function plusSlides(n){
showSlides(slideIndex += n);
}
 
function showSlides(n){
 let i;
 let slides = document.getElementsByClassName("hero");
 if(n > slides.length) {slideIndex = 1}
 if( n < 1 ) {slideIndex = slides.length}
 for( i = 0; i < slides.length; i++ ){
    slides[i].style.display = "none";
 }
 slides[slideIndex-1].style.display = "block";

};

//night mode
const button = document.getElementById('toggleBtn');
        let isNight = false;

        button.addEventListener('click', () => {
            document.body.classList.toggle('night-mode');
            isNight = !isNight;
            button.innerHTML = isNight 
                ? '<i class="fas fa-sun"></i> ' 
                : '<i class="fas fa-moon"></i> ';

                logo.src = isNight 
                ? "./image/white-logo.png" 
                : "./image/logo.png";
            button.classList.toggle('day-btn');
            button.classList.toggle('night-btn');
        });



// nav bar


