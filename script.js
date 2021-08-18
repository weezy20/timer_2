const body = document.body;
const timer = document.getElementById('timer');
const clock = document.querySelector("#timer-container p");
const btn = document.getElementById('start');

function main() {
    clock.textContent = "00::00";
    btn.addEventListener("click", createTimer, { once: true });
}

function createTimer() {
    const time = Number(timer.value);
    btn.textContent = "START";
    btn.style.borderRadius = "2em";
    btn.style.backgroundColor = "#522b29A0";
    // Weird JS can compare strings to numbers so this step works without the Number coercion as well
    let t = time < 10 ? '0' + time : time;
    clock.textContent = `${t}::00`;
    btn.addEventListener("click", (evt) => startTimer(time, evt), { once: true });
}

function startTimer(time, evt) {
    btn.innerText = "PAUSE"; // todo!()
    let isPaused = false;

    let seconds = 60 * time;
    let start_timer = setInterval(() => {
        btn.addEventListener("click", () => {
            isPaused = true;
            btn.innerText = "RESUME";

        });
        // Update text of clock
        if (!isPaused) {
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
                btn.style.backgroundColor = "none";
                btn.borderRadius = "none";
                btn.innerText = "Make Timer";
                btn.addEventListener("click", main, { once: true });
            }
        } else {
            btn.addEventListener("click", () => {
                isPaused = false;
                btn.innerText = "Pause";
            })
        }
    }, 1000);

}

main();