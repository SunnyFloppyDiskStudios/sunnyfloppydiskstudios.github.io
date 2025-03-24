let isViewing = false;

function findRelative(appletName) {
    let fileName = `../infoCards/${appletName}.md`;

    fetch(fileName)
        .then(response => {
            if (!response.ok) throw new Error("File not found");
            return response.text();
        })
        .then(data => infoCard(data))
        .catch(error => console.error("Error loading file:", error));
}

function infoCard(content) {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("popup-overlay");

    popup.innerHTML = `
        <button class="close-btn" onclick="viewCard('')">Close</button>
        <div class="popup-content">${content}</div>
    `;
    popup.style.display = "block";
    overlay.style.display = "block";

    document.body.classList.add("no-scroll");
}

function viewCard(appletFile) {
    let popup = document.getElementById("popup");
    let overlay = document.getElementById("popup-overlay");

    if (appletFile) {
        infoCard(appletFile);
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";

        document.body.classList.remove("no-scroll");
    }
}

function displayCard(appletName) {
    findRelative(appletName);
    let overlay = document.getElementById("popup-overlay");
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
}
