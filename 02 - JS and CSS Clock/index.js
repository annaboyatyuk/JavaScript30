

function setDate() {
  const secondHand = document.querySelector('.second-hand');
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minuteHand = document.querySelector('.min-hand');
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(secondsDegrees)
}

setInterval(setDate, 1000)