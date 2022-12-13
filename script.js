const restaurantButton = document.getElementById("restaurant-button")
const sectionWrapper = document.querySelector('.section-wrapper')

restaurantButton.addEventListener("click", function() {
    sectionWrapper.classList.toggle('show')
})