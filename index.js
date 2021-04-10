const refs = {
  timerNums: document.querySelector('#timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  intervalId = setInterval(() => {
    const now = Date.now();
    const deltaTime = this.targetDate - now;
    const time = this.getTime(deltaTime);

    this.updateClockface(time);
    this.stopCounting(time);
  }, 1000);

  stopCounting(time) {
    if (time < 0) {
      clearInterval(this.intervalId);
      refs.timerNums.innerHTML = 'THE WINTER IS COME';
    }
  }

  updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 01, 2021'),
});
