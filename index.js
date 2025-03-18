const html = document.querySelector("html");

html.onwheel = (e) => {
    if (html.scrollHeight > html.clientHeight) {
        if (e.wheelDeltaY < 0) {
            document.body.style.backgroundColor = '#6b5fff';
        } else if (e.wheelDeltaY > 0) {
            document.body.style.backgroundColor = '#00122c';
        }
    } else {
        if (e.wheelDeltaY < 0) {
            document.body.style.backgroundColor = '#6b5fff';
        } else if (e.wheelDeltaY > 0) {
            document.body.style.backgroundColor = '#00122c';
        }
    }
}