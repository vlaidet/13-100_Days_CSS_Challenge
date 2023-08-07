document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image__container');
    images.forEach((el) => {
        el.addEventListener('click', function() {
            console.log("click", el)
        });
    })
});