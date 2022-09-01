// smooth scroll
const headerLinks = ".container";

function smoothScroll(el) {
  document.querySelector(el).addEventListener("click", function (e) {
    e.preventDefault();

    // if (
    //   e.target.classList.contains("nav-link") ||
    //   e.target.classList.contains(".brand-img")
    // ) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    // }
  });
}

smoothScroll(headerLinks);
