const body = document.body;
const timer = document.getElementById('timer');
const clock = document.querySelector("#timer-container p");

const btn = document.getElementById('start');
btn.addEventListener("click", createTimer, { once: true });

function createTimer() {
    const time = Number(timer.value);
    btn.textContent = "START";
    btn.style.borderRadius = "0.7em";
    // Weird JS can compare strings to numbers so this step works without the Number coercion as well
    let t = time < 10 ? '0' + time : time;
    clock.textContent = `${t}::00`;
    btn.addEventListener("click", (evt) => startTimer(time, evt), { once: true });
}

function startTimer(time, evt) {
    btn.innerText = "Pause"; // todo!()
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