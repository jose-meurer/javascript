(function () {
  const dateEventDOM = document.querySelector(".hero-content h1 span").innerText;

  const dateEvent = getDate(dateEventDOM);
  const today = new Date();

  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  addLeftTime(...leftTimeDate(today, dateEvent));

  const p = document.querySelector(".hero-content > p");
  
  setInterval(() => {
    [d, h, m, s] = leftTimeDate(new Date(), dateEvent);
    p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `;
  }, 1000);

  function leftTimeDate(dateNow, dateEvent) {
    let left = dateEvent.getTime() - dateNow.getTime();

    const daysLeft = parseInt(left / ONE_DAY);
    left = left - daysLeft * ONE_DAY;

    const hoursLeft = parseInt(left / ONE_HOUR);
    left = left - hoursLeft * ONE_HOUR;

    const minutesLeft = parseInt(left / ONE_MINUTE);
    left = left - minutesLeft * ONE_MINUTE;

    const secondsLeft = parseInt(left / 1000);
    return [daysLeft, hoursLeft, minutesLeft, secondsLeft];
  }

  function addLeftTime(d, h, m, s) {
    const p = document.createElement("p");
    p.textContent = `Contagem regressiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `;
    document.querySelector(".hero-content").appendChild(p);
  }

  function getDate(str) {
    const [date, hour] = str.split(" ");
    const [day, month, year] = date.split("/");
    const [h, m] = hour.split("H");

    return new Date(year, month - 1, day, h, m);
  }
})();
