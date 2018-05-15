function Greeter(name, date = new Date()) {
  let displayName = name.trim();
  displayName = displayName.replace(displayName[0], displayName[0].toUpperCase());

  return isMorning(date) ? `Good morning ${displayName}` : `Hello ${displayName}`;
}

function isMorning(date) {
  const d = new Date(date);
  if (d.getHours() >= 6 && d.getHours() <= 12) {
    return true;
  }
  return false;
}

module.exports = Greeter;
