var pageTop;
window.addEventListener('scroll', function() {
    pageTop = window.pageYOffset;
    console.log(pageTop.toFixed(0));
});

// note: window operations are bit expensive. use them wisely.
// does not capture very small pixel changes.