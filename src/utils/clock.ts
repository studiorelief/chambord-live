function clockHero() {
  const deadline = '2023/09/08 18:00';

  function pad(num, size) {
    const s = '0' + num;
    return s.substr(s.length - size);
  }

  function parseDate(date) {
    const parsed = Date.parse(date);
    if (!isNaN(parsed)) return parsed;
    return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
  }

  function getTimeRemaining(endtime) {
    const total = parseDate(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  function clock(id, endtime) {
    const days = document.getElementById(id + '-days');
    const hours = document.getElementById(id + '-hours');
    const minutes = document.getElementById(id + '-minutes');
    const seconds = document.getElementById(id + '-seconds');

    var timeinterval = setInterval(function () {
      const time = getTimeRemaining(endtime);

      if (time.total <= 0) {
        clearInterval(timeinterval);
      } else {
        days.innerHTML = pad(time.days, 2);
        hours.innerHTML = pad(time.hours, 2);
        minutes.innerHTML = pad(time.minutes, 2);
        seconds.innerHTML = pad(time.seconds, 2);
      }
    }, 1000);
  }

  clock('js-clock', deadline);
}

export { clockHero };
