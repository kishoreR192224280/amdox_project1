// ripple.js

export const createRipple = (event) => {
  const button = event.currentTarget;

  // Remove old ripple if still there
  const oldRipple = button.querySelector(".ripple");
  if (oldRipple) oldRipple.remove();

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

  circle.classList.add("ripple");
  button.appendChild(circle);
};
