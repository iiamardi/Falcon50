document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    // Next slide
    nextButton.addEventListener("click", () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    });

    // Previous slide
    prevButton.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });

    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Click on thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showSlide(index);
        });
    });

    // Initialize the slider
    showSlide(currentIndex);
});
