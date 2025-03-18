const html = document.querySelector("html");

window.onload = () => {
    html.style.backgroundColor = "#ffffff";
}

function switchBG() {
    const halfwayPoint = document.documentElement.scrollHeight / 2;

    if (window.scrollY + window.innerHeight / 2 < halfwayPoint) {
        html.style.backgroundColor = '#00122c';
    } else {
        html.style.backgroundColor = '#6b5fff';
    }
}

window.addEventListener("scroll", switchBG);
window.addEventListener("wheel", switchBG);
window.addEventListener("load", switchBG);
window.addEventListener("resize", switchBG);

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}