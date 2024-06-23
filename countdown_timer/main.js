const countdownElement = document.getElementById("countdown");

function CountDownTimer() {
  const now = new Date();
  const targetTime = new Date();
  targetTime.setHours(17, 0, 0, 0);

  if (now > targetTime) {
    window.localStorage.removeItem("countdownTimer");
    return {
      showCountDownTimer: false,
      timer: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
  } else {
    const diff = targetTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    window.localStorage.setItem("countdownTimer", diff);
    return {
      showCountDownTimer: true,
      timer: {
        h: hours,
        m: minutes,
        s: seconds,
      },
    };
  }
}

function renderPlural(number) {
  return number > 1 ? "S " : " ";
}

function handleCountdown() {
  function updateCountdown() {
    let { showCountDownTimer, timer } = CountDownTimer();

    countdownElement.innerHTML = "";

    if (showCountDownTimer) {
      countdownElement.innerHTML += `<h2 id="countdown_timer">
        WELCOME, ${timer.h} HOUR${renderPlural(timer.h)} ${timer.m} 
        MIN${renderPlural(timer.m)} ${timer.s} SECOND${renderPlural(timer.s)} IS THE END OF WORKING
        TIME
      </h2>`;
    } else {
      countdownElement.innerHTML += `<h2 id="countdown_timer">
        Abel is back
      </h2>`;
      clearInterval(countDown);
    }
  }

  updateCountdown();
  const countDown = setInterval(updateCountdown, 1000);
}

window.addEventListener("load", handleCountdown);
window.addEventListener("beforeunload", function () {
  window.localStorage.removeItem("countdownTimer");
});
