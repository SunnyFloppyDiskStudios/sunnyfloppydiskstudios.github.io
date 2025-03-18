const html = document.querySelector("html");
window.addEventListener("scroll", () => {
    const halfwayPoint = document.documentElement.scrollHeight / 2;

    if (window.scrollY + window.innerHeight / 2 < halfwayPoint) {
        html.style.backgroundColor = '#00122c';
    } else {
        html.style.backgroundColor = '#6b5fff';
    }
})


function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}