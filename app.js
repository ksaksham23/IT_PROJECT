// const carouselSlide = document.querySelector(".slide");
// const carouselImages = document.querySelectorAll(".slide img");

// const prevButton = document.querySelector("#prev-button");
// const nxtButton = document.querySelector("#nxt-button");

// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// nxtButton.addEventListener("click", () => {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = `transform 0.4s ease-in-out`;
//   counter++;
//   carouselSlide.style.transform = `translateX(${-size * counter}px)`;
// });

// prevButton.addEventListener("click", () => {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = `transform 0.4s ease-in-out`;
//   counter--;
//   carouselSlide.style.transform = `translateX(${-size * counter}px)`;
// });

// carouselSlide.addEventListener("transitionend", () => {
//   if (carouselImages[counter].id === "lastclone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - 2;
//     carouselSlide.style.transform = `translateX(${-size * counter}px)`;
//   }
//   if (carouselImages[counter].id === "firstclone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = `translateX(${-size * counter}px)`;
//   }
// });

// function imageGallery() {
//   const highlight = document.querySelector(".gallery-hightlight");
//   const previews = document.querySelectorAll(".img-preview img");

//   previews.forEach((preview) => {
//     preview.addEventListener("click", function () {
//       const smallSrc = this.src;
//       const bigSrc = smallSrc.replace("small", "big");
//       previews.forEach((preview) => preview.classList.remove("img-active"));
//       highlight.src = bigSrc;
//       preview.classList.add("img-active");
//     });
//   });
// }

// imageGallery();

function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".img-preview img");
  const imageLink = document.getElementById("imageLink");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach((preview) => preview.classList.remove("img-active"));
      highlight.src = bigSrc;
      preview.classList.add("img-active");
      imageLink.href = bigSrc; // Set the href attribute to the active image src
      imageLink.target = "_blank";
    });
  });
}

imageGallery();
