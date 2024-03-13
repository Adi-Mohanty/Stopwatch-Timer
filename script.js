function Stopwatch() {
    let milisec = 0;
    let sec = 0;
    let min = 0;
    let hr = 0;
    let interval = null;
    let timerSec = document.querySelector(".stopwatch-display");
    let lapsContainer = document.querySelector(".laps-container");
    let lapsSection = document.querySelector(".laps-section");

    function startTimer() {
        if (interval !== null) {
            clearInterval(interval);
        }
        interval = setInterval(() => displayTimer(), 1000);
    }

    function pauseTimer() {
        if (interval !== null) {
            clearInterval(interval);
        }
    }

    function resetTimer() {
        clearInterval(interval);
        [milisec, sec, min, hr] = [0, 0, 0, 0];
        timerSec.textContent = `00 : 00 : 00`;
        lapsContainer.innerHTML = "";
        lapsSection.classList.remove("d-block");
        lapsSection.classList.add("d-none");
    }

    function lapseTimer() {
        let lapsLi = document.createElement("li");
        lapsLi.textContent = timerSec.textContent;
        lapsLi.classList.add("list-group-item", "my-1", "bg-dark", "text-white", "border-0", "rounded");
        lapsContainer.appendChild(lapsLi);
        lapsSection.classList.remove("d-none");
        lapsSection.classList.add("d-block");
    }

    function displayTimer() {
        sec++;

        if (sec == 60) {
            sec = 0;
            min++;

            if (min == 60) {
                min = 0;
                hr++;
            }
        }

        let h = hr < 10 ? "0" + hr : hr;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;

        timerSec.innerHTML = `${h} : ${m} : ${s}`;
    }

    document.getElementById("start-timer").addEventListener("click", startTimer);
    document.getElementById("pause-timer").addEventListener("click", pauseTimer);
    document.getElementById("reset-timer").addEventListener("click", resetTimer);
    document.getElementById("lapse-timer").addEventListener("click", lapseTimer);

    return {
        startTimer: startTimer,
        pauseTimer: pauseTimer,
        resetTimer: resetTimer,
        lapseTimer: lapseTimer
    };
}

const stopwatch = new Stopwatch();
