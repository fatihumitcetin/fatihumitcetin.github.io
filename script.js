document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector("i");

      if (content.style.display === "block") {
        content.style.display = "none";
        this.classList.remove("active");
        icon.style.transform = "rotate(0deg)"; // Return to original position
      } else {
        content.style.display = "block";
        this.classList.add("active");
        icon.style.transform = "rotate(90deg)"; // Point downwards (90 degrees)
      }
    });
  });
});
