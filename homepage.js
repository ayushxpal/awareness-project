const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define animation variables
let x = 100;
let y = 100;
let dx = 5;
let dy = 3;

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fillStyle = 'red';
  ctx.fill();

  // Update animation variables
  x += dx;
  y += dy;

  // Bounce the circle off the edges
  if (x + dx > canvas.width || x + dx < 0) {
    dx *= -1;
  }
  if (y + dy > canvas.height || y + dy < 0) {
    dy *= -1;
  }

  // Request animation frame for smooth animation
  requestAnimationFrame(animate);
}

animate();
