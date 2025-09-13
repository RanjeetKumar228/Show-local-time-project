const clock = document.querySelector("#clock")

function formatParts(date){
  // Get a locale time string and try to separate AM/PM if present
  const timeStr = date.toLocaleTimeString();
  const ampmMatch = timeStr.match(/\b(AM|PM)\b/i);
  const ampm = ampmMatch ? ampmMatch[0] : '';
  // remove AM/PM from main time when present
  const timeOnly = ampm ? timeStr.replace(new RegExp('\\s?' + ampm + '$','i'),'') : timeStr;
  return { timeOnly, ampm };
}

function updateClock(){
  if(!clock) return;
  const now = new Date();
  const { timeOnly, ampm } = formatParts(now);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

  // Build structured HTML to match styles
  clock.setAttribute('role','timer');
  clock.innerHTML = `\n    <div class="time">${timeOnly}</div>\n    <div class="ampm">${ampm}</div>\n    <div class="tz">${tz}</div>`;
}

// initial render + interval
updateClock();
setInterval(updateClock, 1000);