/* imp. use of event object */

var myForm = document.querySelector('form');

myForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the form from submitting
  var formData = document.querySelector('input').value;
  alert(formData); // same as: e.target.children[0].children[0].value
});