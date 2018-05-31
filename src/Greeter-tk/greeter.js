function Greeter(name, date = new Date()) {
  let displayName = name.trim();
  displayName = displayName.replace(displayName[0], displayName[0].toUpperCase());

  const greeting = getGreeting(date, displayName);

  console.log(greeting);

  return greeting;
}

function getGreeting(date, name) {
  const d = new Date(date);

  if (d.getHours() >= 6 && d.getHours() <= 12) {
    return `Good morning ${name}`;
  } else if (d.getHours() >= 18 && d.getHours() <= 22) {
    return `Good evening ${name}`;
  } else if (d.getHours() > 22 || d.getHours() < 6) {
    return `Good night ${name}`;
  }

  return `Hello ${name}`;
}

module.exports = Greeter;
