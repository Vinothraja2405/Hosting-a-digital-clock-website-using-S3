function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    updateFlip("hours", hours);
    updateFlip("minutes", minutes);
    updateFlip("seconds", seconds);
    updateFlip("ampm", ampm);
}

function updateFlip(id, newValue) {
    let element = document.getElementById(id);
    if (element.textContent !== newValue) {
        element.setAttribute("data-value", element.textContent);
        element.textContent = newValue;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initialize immediately
