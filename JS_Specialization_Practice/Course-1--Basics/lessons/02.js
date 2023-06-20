/* DOM manipulation Examples/ Practice */
/* JQuery (querySelectors) */
let specialParas = document.querySelectorAll("#special p");
for (const para of specialParas) {
  para.style.color = "red";
  para.style.fontWeight = "bold";
}

let singlePara = document.querySelector("#notSpecial p");
singlePara.style.color = "blue";

let notSpecialParas = document.querySelector("#notSpecial");
notSpecialParas.style.backgroundColor = "lightblue";

notSpecialParas.innerHTML += "<p> 7th paragraph</p>";
