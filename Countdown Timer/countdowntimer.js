var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTimer() {
  const countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

  // converted days, seconds, minutes and hour to milliseconds 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Decided to calculate every seconds
  const interval = setInterval(() => {
    // got currnent date
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      // If the countdown is over, set the countdown elements to zero
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minutesEl.innerText = '00';
      secondsEl.innerText = '00';
    } else {
      // Otherwise, continue counting down
      daysEl.innerText = formatNumber(Math.floor(distance / day));
      hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour));
      minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute));
      secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second));
    }

    //when date is reached
    if (distance < 0) {
      document.getElementById('headline')('headline end').innerText = 'EXPIRED';
      document.getElementById('countdown').style.display = 'none';

      // Stop interval
      clearInterval(interval);
    }
  }, 1000);
}

function formatNumber(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

// Run function 
countdownTimer();