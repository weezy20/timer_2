const body = document.body;
const timer = document.getElementById('timer');
const time = timer.value;
const clock = document.querySelector("#timer-container p");

const btn = document.getElementById('start');
btn.addEventListener("click", createTimer);

function createTimer() {
    btn.textContent = "START";
    // btn.style.borderRadius = "0.7em";
    let _time = time < 10 ? '0' + time : time;
    clock.textContent = `${_time}::00`;
    btn.removeEventListener("click", createTimer);
    btn.addEventListener("click", startTimer, { once: true });
}

function startTimer() {
    btn.innerText = "Pause";
    let seconds = 60 * time;
    let start_timer = setInterval(() => {
        // Update text of clock
        let s = seconds % 60;
        let sec_hand = s >= 10 ? s : '0' + s;
        let m = Math.floor(seconds / 60);
        let min_hand = m >= 10 ? m : '0' + m;
        let even = `${min_hand}:${sec_hand}`;
        let odd = `${min_hand}:${sec_hand}`;
        clock.innerText = s % 2 == 0 ? even : odd;
        seconds--;
        if (seconds == 0) {
            clearInterval(start_timer);
            clock.innerText = "TIME'S UP!";
        }
    }, 1000);

    btn.removeEventListener("click", startTimer);
}