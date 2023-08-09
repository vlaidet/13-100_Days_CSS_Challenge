document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image__container");
  const closeButton = document.querySelector(
    ".gallery__overlay .header .close"
  );
  const galleryOverlay = document.querySelector(".gallery__overlay");

  images.forEach((el) => {
    el.addEventListener("click", function () {
      !galleryOverlay.classList.contains("active")
        ? galleryOverlay.classList.add("active")
        : galleryOverlay.classList.remove("active");
    });
  });

  closeButton.addEventListener("click", function () {
    galleryOverlay.classList.remove("active");
  });
});
