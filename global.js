window.addEventListener("scroll", () => {
    const halfwayPoint = document.documentElement.scrollHeight / 2;

    if (window.scrollY + window.innerHeight / 2 < halfwayPoint) {
        document.body.style.backgroundColor = '#00122c';
    } else {
        document.body.style.backgroundColor = '#6b5fff';
    }
})


function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}