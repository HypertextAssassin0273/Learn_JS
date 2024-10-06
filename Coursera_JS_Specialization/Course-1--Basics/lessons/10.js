/* JS Challenge 26 */

var divTag = document.querySelector("div"),
    addBtn = document.querySelector("button"),
    removeBtn = document.querySelectorAll("button")[1],
    noOfPs = 1;

addBtn.addEventListener("click", function() {
    let newPara = document.createElement("p");
    newPara.textContent = `This is paragraph no. ${++noOfPs}`;
    divTag.appendChild(newPara);
});

removeBtn.addEventListener("click", function() {
    if (noOfPs > 1) {
        divTag.removeChild(divTag.lastElementChild);
        noOfPs--;
    }else
        alert("You can't remove the last paragraph");
});