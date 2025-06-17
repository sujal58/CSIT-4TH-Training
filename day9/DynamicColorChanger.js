// ---------------------------------
// Dynamic background color changer using setInterval

const chars = "0123456789ABCDEF";
let colorIntervalId;

/**
 * Generates a random hex color string like '#A1B2C3'
 */
function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    color += chars[randomNumber];
  }
  return color;
}

/**
 * Assigns a random background color to the page body
 */
function assignColor() {
  const color = generateColor();
  document.body.style.backgroundColor = color;
  console.log("Background color changed to", color);
}

/**
 * Starts the color-changing interval, changing every 1 second
 */
function handleInterval() {
  if (!colorIntervalId) {
    // prevent multiple intervals
    colorIntervalId = setInterval(assignColor, 1000);
    console.log("Color changing started");
  }
}

/**
 * Stops the color-changing interval
 */
function stopInterval() {
  if (colorIntervalId) {
    clearInterval(colorIntervalId);
    colorIntervalId = null;
    console.log("Color changing stopped");
  }
}