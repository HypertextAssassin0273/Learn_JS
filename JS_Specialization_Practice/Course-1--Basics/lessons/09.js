// event bubbling and capturing: https://javascript.info/bubbling-and-capturing
// bubbling: event goes from the innermost element to the outermost element
// capturing: event goes from the outermost element to the innermost element

// event delegation: https://javascript.info/event-delegation
// event delegation: event is handled by a single common ancestor of all elements

/* Event Delegation Example */
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

//more info: https://developer.mozilla.org/en-US/docs/Web/Events