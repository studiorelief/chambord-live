function padNumber(num: number, size: number): string {
  const s = '0' + num;
  return s.substr(s.length - size);
}

function parseDate(dateStr: string): number {
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) return parsed;
  return Date.parse(dateStr.replace(/-/g, '/').replace(/[a-z]+/gi, ' '));
}

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(endtime: string): TimeRemaining {
  const total = parseDate(endtime) - Date.parse(new Date().toISOString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function updateClock(id: string, endtime: string): void {
  const daysElem = document.getElementById(`${id}-days`);
  const hoursElem = document.getElementById(`${id}-hours`);
  const minutesElem = document.getElementById(`${id}-minutes`);
  const secondsElem = document.getElementById(`${id}-seconds`);

  const timeinterval = setInterval(() => {
    const time = getTimeRemaining(endtime);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    } else {
      if (daysElem) daysElem.innerHTML = padNumber(time.days, 2);
      if (hoursElem) hoursElem.innerHTML = padNumber(time.hours, 2);
      if (minutesElem) minutesElem.innerHTML = padNumber(time.minutes, 2);
      if (secondsElem) secondsElem.innerHTML = padNumber(time.seconds, 2);
    }
  }, 1000);
}

function clockHero(): void {
  const deadline = '2023/12/06 10:00';
  updateClock('js-clock', deadline);
}

export { clockHero };
