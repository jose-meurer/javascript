(function () {
  const dateDOM = document.querySelector(".hero-content > h1 > span").innerText;

  const dateEvent = getDate(dateDOM); //Data do evento
  const dateToday = new Date(); //data de hoje

  const ONE_SECOND = 1000;
  const ONE_MINUTE = 60 * ONE_SECOND;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  let left = dateEvent.getTime() - dateToday.getTime(); //ms faltantes entre hoje e evento

  const daysLeft = Math.floor(left / ONE_DAY);
  left = left - daysLeft * ONE_DAY;

  const hoursLeft = Math.floor(left / ONE_HOUR);
  left = left - hoursLeft * ONE_HOUR;

  const minutesLeft = Math.floor(left / ONE_MINUTE);
  left = left - minutesLeft * ONE_MINUTE;

  const secondsLeft = Math.floor(left / ONE_SECOND);

  addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  function addLeftTime(d, h, m, s) {
    const p = document.createElement("p");
    p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos e ${s} segundos.`;
    document.querySelector(".hero-content").appendChild(p);
  }

  function getDate(str) { //divide em data e horas e retorna um Date
    const [dateDay, dateTime] = str.split(" ");
    const [day, month, year] = dateDay.split("/");
    const [hour, minutes] = dateTime.split("H");

    return new Date(year, month - 1, day, hour, minutes);
  }
})();
