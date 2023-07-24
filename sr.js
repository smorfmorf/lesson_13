const p = document.querySelector(".loremText");
const input = document.getElementById("in");
const NodeList = document.querySelectorAll("div");
const HTMLColllection = document.getElementsByTagName("div");

console.log("block: ", p);
console.log("input: ", input);

console.log("NodeList: ", NodeList);
console.log("HTMLColllection: ", HTMLColllection);

const foo = document.getElementById("foo");
foo.innerHTML += `<div class="item">mazaka</div>`;

console.log("NodeList:", NodeList, "HTMLColllection:", HTMLColllection);
