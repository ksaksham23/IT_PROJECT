function imageGallery() {
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".img-preview img");
  const imageLink = document.getElementById("imageLink");
  const contactLink = document.querySelector("#gallery");
  contactLink.classList.add("active");

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
