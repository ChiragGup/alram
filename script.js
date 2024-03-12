function updateTime() {
    var dt = new Date();

    let hour = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    let showTime = document.getElementById("showTime");
    showTime.innerHTML = h + ":" + m + ":" + s + " " + (hour >= 12 ? "PM" : "AM");
}

// Call updateTime initially to set the time
updateTime();

// Use setInterval to update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

function selectDate() {
    let currentTime = new Date();
    let setTimeInput = document.getElementById("setTime");
    let setTime = new Date(setTimeInput.value); // Get the value of the input field

    let timeDifference = setTime - currentTime;
    let displayTime = document.querySelector(".display");
    displayTime.innerHTML = setTime.toLocaleString();

    setTimeout(() => {
        let show = document.querySelector(".show");
        let p = document.createElement("p");
        p.innerHTML = displayTime.innerHTML;
        show.appendChild(p);

        let button = document.createElement("button");
        button.classList.add("deleteBtn"); // Add the class to the button
        button.innerHTML = "Delete";
        p.appendChild(button);
        button.addEventListener("click", function () {
            show.removeChild(p);
        });
    }, 1000);

    setTimeout(() => {
        if (timeDifference >= 0) {
            let audio1 = new Audio("twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3");
            audio1.play();
        } else {
            let audio = new Audio("windows_xp_error.mp3");
            audio.play();
        }
    }, timeDifference);
}
