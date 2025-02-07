const pacMen = []; // This array holds all the Pac-Men

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a Pac-Man at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "./images/PacMan1.png";
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = `${position.x}px`;
  newimg.style.top = `${position.y}px`;

  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = `${item.position.x}px`;
    item.newimg.style.top = `${item.position.y}px`;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  // Condition on X position < 0 
 // Check if Pac-Man has hit the left or right boundaries of the screen
 if (
  item.position.x >= window.innerWidth - item.newimg.width ||
  item.position.x <= 0
) {
  item.velocity.x *= -1; // Reverse horizontal direction
}

// Check if Pac-Man has hit the top or bottom boundaries of the screen
if (
  item.position.y >= window.innerHeight - item.newimg.height ||
  item.position.y <= 0
) {
  item.velocity.y *= -1; // Reverse vertical direction
}
}

function makeOne() {
  pacMen.push(makePac());
}

// don't change this line
if (typeof module !== "undefined") {
  module.exports = { checkCollisions, update, pacMen };
}
