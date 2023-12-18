function padNumber(num: number, size: number) {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
}

function parseDate(dateStr: string) {
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) return parsed;
  return Date.parse(dateStr.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
}

function getTimeRemaining(endtime: string) {
  // Utilisation de Date.now() pour obtenir le temps actuel en millisecondes
  const total = parseDate(endtime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function updateClock(id: string, endtime: string) {
  const daysElem = document.getElementById(`${id}-days`);
  const hoursElem = document.getElementById(`${id}-hours`);
  const minutesElem = document.getElementById(`${id}-minutes`);
  const secondsElem = document.getElementById(`${id}-seconds`);

  const timeinterval = setInterval(() => {
    const time = getTimeRemaining(endtime);

    if (time.total <= 0) {
      clearInterval(timeinterval);
      if (daysElem) daysElem.innerHTML = '00';
      if (hoursElem) hoursElem.innerHTML = '00';
      if (minutesElem) minutesElem.innerHTML = '00';
      if (secondsElem) secondsElem.innerHTML = '00';
    } else {
      if (daysElem) daysElem.innerHTML = padNumber(time.days, 2);
      if (hoursElem) hoursElem.innerHTML = padNumber(time.hours, 2);
      if (minutesElem) minutesElem.innerHTML = padNumber(time.minutes, 2);
      if (secondsElem) secondsElem.innerHTML = padNumber(time.seconds, 2);
    }
  }, 1000);
}

function clockHero() {
  const deadline = '2024/06/06 19:00'; // Assurez-vous que cette date est dans le bon fuseau horaire
  updateClock('js-clock', deadline);
}

export { clockHero };
