class Timer {
  constructor(selector, countdown) {
    this.element = document.querySelector(selector);
    this.countdown = countdown;
  }
  getSeconds() {
    return Math.floor((this.countdown % (1000 * 60)) / 1000);
  }

  getMinutes() {
    return Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60));
  }

  getHours() {
    return Math.floor(
      (this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
  }

  getDays() {
    return Math.floor(this.countdown / (1000 * 60 * 60 * 24));
  }

  render() {
    this.element.innerHTML = `${this.getDays()}:${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
  }

  init() {
    const interval = setInterval(() => {
      this.countdown -= 1000;

      if (this.countdown <= 0) {
        clearInterval(interval);
      }

      this.render();
    }, 1000);
  }
}

export default Timer;
