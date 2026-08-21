document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".carousel-btn.prev");
    const nextButton = document.querySelector(".carousel-btn.next");
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    /*querySelectorAll se diferencia do outro query selector pq ele pega TODOS 
    os elemento com esse seletor, enquanot o outro para no primeiro encontrado*/
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    const changeSlide = () => {
        carouselContainer.style.transform = `translateX(-${currentIndex*100}%)`;
    }
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        changeSlide();
    }
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        changeSlide();
    }
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 10000);

    changeSlide();
})