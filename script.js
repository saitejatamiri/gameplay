const ball = document.getElementById("ball");
const scoreElement = document.getElementById("score");

let score = 0;

ball.addEventListener("click", () => {
  score++;
  scoreElement.textContent = score;

  // Move the ball to a random position
  const gameArea = document.getElementById("game-area");
  const gameAreaRect = gameArea.getBoundingClientRect();

  const ballSize = 30; // Ball width and height
  const x = Math.random() * (gameAreaRect.width - ballSize);
  const y = Math.random() * (gameAreaRect.height - ballSize);

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});
