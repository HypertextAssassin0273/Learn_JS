/* a part */
// document.write("this is extenal js.<br>");//<br> -> new line in html
// document.getElementById('th').innerHTML ="this is para";

/* b part */
//single line comment

/*
multi 
line 
comment
*/

/* c part */
// var a1=45, a2=5;
// document.write(a1+a2, "<br>");
// document.write(a1, a2, "<br><br>");

/* d part */
// console.log("i am console");//for debugging purposes

/* e part */
// var age= prompt("your age?");
// //document.write("<br>your age: ", age);
// alert("your age: ", age);

/* f part */
// document.write("5 + 9", "<br>", 5+9, "<br>");
// document.write("5 - 9", "<br>", 5-9, "<br>");
// document.write("5 * 9", "<br>", 5*9, "<br>");
// document.write("5 / 9", "<br>", 5/9, "<br>");
// document.write("5 % 9", "<br>", 5%9, "<br>");

/* g part */
// var FoodCost=100, NoOfPeople=8;
// // var FoodCost=prompt("enter total amount? ");
// document.write("total cost: ", FoodCost, "<br>");
// document.write("cost per person: ", (FoodCost/NoOfPeople).toFixed(2), "<br>");


/* h part */
// document.write("2^4: ", Math.pow(2, 4), "<br>");
// document.write("|-34|: ", Math.abs(-34), "<br>");
// document.write("sqrt(4): ", Math.sqrt(4), "<br>");
/* w3schools -> JS math */

/* i part */
// var str = "string";
// document.write(str, "<br>");
// document.write(str.length, "<br>");
// document.write(str.indexOf("ring"), "<br>");//sub-string or character index search
// document.write(str.substr(2, 4), "<br>");
// document.write(str.slice(1, 4), "<br>");
// document.write(str.slice(1), "<br>");
// document.write(str.replace("ing", "aight"), "<br>");
// document.write(str.toUpperCase(), "<br>");//opposite: .toLowerCase()
/* w3schools -> JS string */

/* j part */
// var age = 23;
// if(age<20){
// 	document.write("school age<br>");
// }else if(age<10||age>3){
// 	document.write("baby boy<br>");
// }else{
// 	document.write("bla bla blue<br>");
// }

/* k part */
// var age = 23;
// switch(age){
// case 12:
// 	document.write("i am 12<br>");
// 	break;

// case 22:
// 	document.write("i am 22<br>");
// 	break;
// default:
// 	document.write("i am default"<br>");
// 	break;
// }

/* l part */
// var i=1;
// while(i<=10){
// 	document.write(i++, "<br>");
// }

// var i=1;
// do{//runs atleast 1 time always
// 	document.write(i++, "<br>");
// }while(i<=10);

// for(var i=1;i<=10;++i){
// 	document.write(i, "<br>");
// }

/* m part */
var books = ["wow", "ctci","stands for", "cracking the code interview", 666];
/* can be used for different data-types */

// document.write(books[1], "<br>");
// document.write(books[books.length-1], "<br>");

/* n part */
function f(){
	document.write("i am 'f' function.<br>");
	console.log("func call");
}
f();//calling