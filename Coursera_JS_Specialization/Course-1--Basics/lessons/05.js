var heading = document.querySelector('h1'),
    box = document.querySelector('div');

box.addEventListener('mousemove', function() {
  heading.innerHTML = "The mouse is over the box!";
});

box.addEventListener('mouseout', function() {
  heading.innerHTML = "The mouse is out of the box!";
});

heading.addEventListener('mouseover', function() {
  heading.innerHTML = "Roll your Mouse Over the Boxes!";
});