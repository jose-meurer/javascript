function quantoFaltaPara(m, d) {
  const today = new Date();
  today.setMilliseconds(0);
  today.setSeconds(0);
  today.setMinutes(0);
  today.setHours(0);

  const birthday = new Date(today.getFullYear(), m - 1, d);

  const todayMilliseconds = today.getTime();
  let birthdayMilliseconds = birthday.getTime();

  if (todayMilliseconds > birthdayMilliseconds) {
    birthday.setFullYear(birthday.getFullYear() + 1);
    birthdayMilliseconds = birthday.getTime();
  }

  const ONE_DAY = 24 * 60 * 60 * 1000;
  let left = birthdayMilliseconds - todayMilliseconds;

  return parseInt(left / ONE_DAY);
}
