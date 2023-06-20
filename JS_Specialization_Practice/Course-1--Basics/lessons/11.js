/* JS Challenge 28 */

let divTag = document.querySelector("div");

divTag.addEventListener("mouseover", function() {
    divTag.className = "big";
});

divTag.addEventListener("mouseout", function() {
    divTag.removeAttribute("class");
});