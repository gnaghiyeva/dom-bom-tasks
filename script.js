let body = document.querySelector("body");
body.style.fontFamily="Playfair Display";
let container = document.createElement("div");
container.classList.add(".container");
// container.style.border="2px solid black";
let div_container = document.createElement("div");
div_container.classList.add(".div-container");

// div_container.style.width="100%";
div_container.style.padding = "0px 160px";
div_container.style.height = "400px";
// div_container.style.border = "5px solid orange";



let box = document.createElement("div");
box.classList.add(".box");
// box.style.width = "960px";
// box.style.height= "360px";
box.style.padding = "140px 40px"
box.style.border = "1px solid black";
box.style.backgroundColor = "#333";



let p = document.createElement("p");
p.classList.add("parag");
p.textContent = "960 x 360px";
p.style.color = "white";
p.style.fontSize = "38px";
p.style.textAlign = "center";


box.append(p);

div_container.append(box);
container.append(div_container);
body.append(container);
body.append(div_container);


let card_container = document.createElement("div");
card_container.classList.add("card-container");
// card_container.style.border="2px solid violet";
card_container.style.width="100%";
card_container.style.padding="0px 160px"
card_container.style.height="400px";
card_container.style.display="flex";
card_container.style.justifyContent="space-between";

//card

let card1 = document.createElement("div");
card1.classList.add ("card");
card1.style.width="30%";

card1.style.height="280px";
// card1.style.border = "3px solid red";


let card2 = document.createElement("div");
card2.classList.add ("card");
card2.style.width="30%";

card2.style.height="280px";
// card2.style.border = "3px solid red";


let card3 = document.createElement("div");
card3.classList.add ("card");
card3.style.width="30%";

card3.style.height="280px";
// card3.style.border = "3px solid red";


let cardBody1 = document.createElement("div");
cardBody1.classList.add("card-body");
cardBody1.style.backgroundColor="#333";
cardBody1.style.padding="80px 130px";
cardBody1.style.border = "2px solid gray";

let cardBody2 = document.createElement("div");
cardBody2.classList.add("card-body");
cardBody2.style.backgroundColor="#333";
cardBody2.style.padding="80px 130px";
cardBody2.style.border = "2px solid gray";


let cardBody3 = document.createElement("div");
cardBody3.classList.add("card-body");
cardBody3.style.backgroundColor="#333";
cardBody3.style.padding="80px 130px";
cardBody3.style.border = "2px solid gray";

let span1 = document.createElement("span");
span1.style.color="white";
span1.textContent = "290 x 180px";
span1.style.fontSize="18px";
span1.style.margin="0px auto";
cardBody1.style.border = "none"
cardBody1.append(span1);

let span2 = document.createElement("span");
span2.style.color="white";
span2.textContent = "290 x 180px";
span2.style.fontSize="18px";
span2.style.margin="0px auto";
cardBody2.style.border = "none"
cardBody2.append(span2);

let span3 = document.createElement("span");
span3.style.color="white";
span3.textContent = "290 x 180px";
span3.style.fontSize="18px";
span3.style.margin="0px auto";
cardBody3.style.border = "none"
cardBody3.append(span3);


let cardFooter1 = document.createElement("div");
cardFooter1.classList.add("card-footer");
cardFooter1.style.border = "none";
cardFooter1.style.backgroundColor="white";


let cardFooter2 = document.createElement("div");
cardFooter2.classList.add("card-footer");
cardFooter2.style.border = "none";
cardFooter2.style.backgroundColor="white";


let cardFooter3 = document.createElement("div");
cardFooter3.classList.add("card-footer");
cardFooter3.style.border = "none";
cardFooter3.style.backgroundColor="white";


let h5_1 = document.createElement("h5");
h5_1.style.color="black";
h5_1.textContent = "Indonectetus facilis";
h5_1.style.fontSize="16px";
h5_1.style.color="gray";
h5_1.style.fontStyle="italic";

let h5_2 = document.createElement("h5");
h5_2.style.color="black";
h5_2.textContent = "Indonectetus facilis";
h5_2.style.fontSize="16px";
h5_2.style.color="gray";
h5_2.style.fontStyle="italic";


let h5_3 = document.createElement("h5");
h5_3.style.color="black";
h5_3.textContent = "Indonectetus facilis";
h5_3.style.fontSize="16px";
h5_3.style.color="gray";
h5_3.style.fontStyle="italic";

let h6_1 = document.createElement("h6");
h6_1.style.color="black";
h6_1.textContent = "Nullamlacaus dui ipsum conseque lobortis non euisque morbi penas dapibulum orna";
h6_1.style.fontSize="14px";
h6_1.style.color="gray";

let h6_2 = document.createElement("h6");
h6_2.style.color="black";
h6_2.textContent = "Nullamlacaus dui ipsum conseque lobortis non euisque morbi penas dapibulum orna";
h6_2.style.fontSize="14px";
h6_2.style.color="gray";

let h6_3 = document.createElement("h6");
h6_3.style.color="black";
h6_3.textContent = "Nullamlacaus dui ipsum conseque lobortis non euisque morbi penas dapibulum orna";
h6_3.style.fontSize="14px";
h6_3.style.color="gray";

let a1 = document.createElement("a");
a1.style.color="Orange";
a1.style.fontWeight="bold";
a1.style.fontSize="13px";

let a2 = document.createElement("a");
a2.style.color="Orange";
a2.style.fontWeight="bold";
a2.style.fontSize="13px";

let a3 = document.createElement("a");
a3.style.color="Orange";
a3.style.fontWeight="bold";
a3.style.fontSize="13px";



cardFooter1.append(h5_1);
cardFooter1.append(h6_1);
cardFooter1.append(a1);

cardFooter2.append(h5_2);
cardFooter2.append(h6_2);
cardFooter2.append(a2);

cardFooter3.append(h5_3);
cardFooter3.append(h6_3);
cardFooter3.append(a3);


card1.append(cardBody1);
card1.append(cardFooter1);

card2.append(cardBody2);
card2.append(cardFooter2);

card3.append(cardBody3);
card3.append(cardFooter3);


card_container.append(card1);
card_container.append(card2);
card_container.append(card3);

// div_container.append(card);

// div_container.append(card)
// container.append(card)

document.querySelector("body").append(card_container);





