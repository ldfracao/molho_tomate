var slideIndex = 0;

carrossel();

function carrossel() {

    var i;
    var slides = document.getElementsByClassName('carrossel_imagens');
    var text = document.getElementsByClassName('carrossel_text')
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    text[slideIndex-1].style.display = "block";
    setTimeout(carrossel, 2000);
}