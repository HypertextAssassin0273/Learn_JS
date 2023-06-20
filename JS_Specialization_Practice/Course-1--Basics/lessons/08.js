document.addEventListener('keydown', function(event) {
    alert(event.key, 'key pressed');
});

// tip: never use deprecated methods/functions/properties
// multiple events can be added to the same element too
// never use inline event handlers (as they are not reusable)
