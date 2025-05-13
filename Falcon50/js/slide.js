document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    let autoSlideInterval;  

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
            slide.style.opacity = i === index ? "1" : "0.5";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle("active", i === index);
            thumbnail.style.opacity = i === index ? "1" : "0.5";
        });
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();  
    });

    prevButton.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
        resetAutoSlide();  
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000); 
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    showSlide(currentIndex);
    startAutoSlide();  
});
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider2");
    const slides = document.querySelectorAll(".slider2 img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        
        slides.forEach(slide => {
            slide.style.display = "none";
        });
         
        slides[index].style.display = "block";
        currentIndex = index;
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
  
    nextButton.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
 
    showSlide(currentIndex);
    startAutoSlide();
});