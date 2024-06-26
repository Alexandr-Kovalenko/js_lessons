// const div1 = document.getElementById("div1");
// const divs = document.querySelectorAll(".div");
// const allDivs = document.querySelectorAll("div");
// const header = document.querySelector("header");

// setTimeout(() => {
//   divs.forEach((div) => {
//     div.style.fontSize = "30px";
//   });
// }, 3000);

// setTimeout(() => {
//   header.innerHTML += "<div>DIV6</div>";
// }, 5000);

// setTimeout(() => {
//   allDivs.forEach((div) => {
//     div.style.color = "blue";
//   });
// }, 4000);

//         створення нових елементів або вузлів

const newDiv1 = document.createElement("div");
const newDiv2 = document.createElement("div");
const newDiv3 = document.createElement("div");
const newDiv4 = document.createElement("div");

const newDivText1 = document.createTextNode("Some Text prepend in body!");
const newDivText2 = document.createTextNode("Some Text append in body!");
const newDivText3 = document.createTextNode("Some Text before body!");
const newDivText4 = document.createTextNode("Some Text after body!");

newDiv1.prepend(newDivText1);
newDiv2.append(newDivText2);
newDiv3.prepend(newDivText3);
newDiv4.prepend(newDivText4);

const head = document.querySelector("header");

head.prepend(newDiv1); // вставити елемент на початку header
head.append(newDiv2); // вставити елемент в кінці header
head.before(newDiv3); // вставити елемент перед header
head.after(newDiv4); // вставити елемент після header

// setTimeout(()=>{
//   newDiv1.remove();
// }, 6000);

// const newDiv4Clone = newDiv4.cloneNode(true);

// setTimeout(()=>{
//   head.after(newDiv4Clone);
// }, 7000);

//                стилі та класи
const wrapperItem = document.querySelector(".wrapper__item");

setTimeout(()=>{
  wrapperItem.style.left = "30px";
}, 2000);

const div10 = document.getElementById("div10");

console.log(div10.className); // div red-text
// div10.className = "border";
// console.log(div10.className); // border --- тобто класи, які були раніше, просто стираються
console.log(div10.classList); // DOMTokenList(2) ['div', 'red-text', value: 'div red-text']

// додати клас
setTimeout(()=>{
  div10.classList.add("active");
}, 2000);

// видалити клас
setTimeout(()=>{
  div10.classList.remove("active");
}, 4000);

// додати та видалити клас за допомогою toggle
setInterval(()=>{
  div10.classList.toggle("black-border");
  if (div10.classList.contains("black-border")) {
    div10.style.margin = "15px";
  } else {
    div10.style.margin = "16px";
  }
}, 1000);

// перевірити наявність класу
console.log(div10.classList.contains("active")); // false --- тому що setTimeout відпрацьовує пізніше
console.log(div10.classList.contains("red-text")); // true

// як отримати стилі елементу
const styles = getComputedStyle(div10);

console.log(styles);
console.log(styles.padding, typeof(styles.padding)); // 16px string
// щоб отримати число потрібно використати метод parseFloat()
let padding = parseFloat(styles.padding);
console.log(padding, typeof(padding)); // 16 'number'

//             розміри та прокрутка
const wrap = document.querySelector(".wrap");

console.log(wrap.offsetLeft); // 16 --- позиціонування елементу по осі x
console.log(wrap.offsetTop); // 490 --- позиціонування елементу по осі y

console.log(wrap.offsetWidth); // 238 --- ширина елементу (контент + бордер + паддінги)
console.log(wrap.offsetHeight); // 238 --- висота елементу (контент + бордер + паддінги)

console.log(wrap.clientLeft); // 3 --- товщина рамки
console.log(wrap.clientTop); // 3 --- товщина рамки

console.log(wrap.clientWidth); // 215 --- ширина контенту в елементі + паддінги
console.log(wrap.clientHeight); // 232 --- висота контенту в елементі + паддінги

console.log(wrap.scrollHeight); // 732 --- повна ширина контенту в елементі + паддінги
console.log(wrap.scrollWidth); // 215 --- повна висота контенту в елементі + паддінги

console.log(document.documentElement.clientWidth); // 1349 --- ширина всього екрану
console.log(document.documentElement.clientHeight); // 438 --- висота всього екрану

console.log(window.pageXOffset); // вказує на те, скільки пікселів по осі X ми проскролили головний екран
console.log(window.pageYOffset); // вказує на те, скільки пікселів по осі Y ми проскролили головний екран

// проскролити головний екран
// setTimeout(()=>{
//   window.scrollBy(0, 200);
// }, 10000);

// заборонити скрол головного екрану
// setTimeout(()=>{
//   document.body.style.overflow = "hidden";
// }, 5000);

//              браузерні події
const wrapperItem2 = document.getElementById("w2");
const wrapperItem3 = document.getElementById("w3");
const wrapperItem4 = document.getElementById("w4");
const wrapperItem5 = document.getElementById("w5");
const wrapperItem6 = document.getElementById("w6");
const wrapperItem7 = document.getElementById("w7");
const wrapperItem8 = document.getElementById("w8");
const wrapperItem9 = document.getElementById("w9");
const wrapperItem10 = document.querySelector("#w10");
const wrapperItem11 = document.querySelector("#w11");

const printHello = () => {
  console.log("Click");
}

const printHello2 = () => {
  alert("Hello2");
}

wrapperItem2.addEventListener("click", printHello);
wrapperItem2.addEventListener("click", printHello2);
wrapperItem2.removeEventListener("click", printHello2); // видалити слухача

wrapperItem3.addEventListener("dblclick", () => {console.log("dblclick")});
wrapperItem4.addEventListener("mousedown", () => {console.log("mousedown")});
wrapperItem5.addEventListener("mouseup", () => {console.log("mouseup")});
wrapperItem6.addEventListener("contextmenu", () => {console.log("contextmenu")});
wrapperItem7.addEventListener("mouseover", () => {console.log("mouseover")});
wrapperItem8.addEventListener("mouseout", () => {console.log("mouseout")});
wrapperItem9.addEventListener("mousemove", () => {console.log("mousemove")});
wrapperItem10.addEventListener("keydown", () => {console.log("keydown")});
wrapperItem11.addEventListener("keyup", () => {console.log("keyup")});

const parent = document.querySelector(".parent");
// const child = document.querySelectorAll(".child");

const toggleActiveChild = (event) => {
  // event.stopPropagation();
  event.target.classList.toggle("active-child");
  // console.log(event.target);
  // console.log(event.currentTarget);
}

parent.addEventListener("click", toggleActiveChild);

//          Властивості та події елементів форми
const form = document.querySelector("#login-form");
console.log(form);

const elementsLoginForm = form.elements;
console.log(elementsLoginForm);

const formLogin = form.elements.login;
console.log(formLogin);

const formLoginValue = form.elements.login.value;
console.log(formLoginValue);

const formChecboxChecked = form.elements.checkbox.checked;
console.log(formChecboxChecked); // false

const formSelect = form.elements.language;
console.log(formSelect.options);
console.log(formSelect.value);
console.log(formSelect.selectedIndex);

formLogin.addEventListener("focus", () => {
  console.log("focus");
});

formLogin.addEventListener("blur", () => {
  console.log("blur");
});

// formLogin.addEventListener("change", () => {
//   console.log("change");
// });

formLogin.addEventListener("input", () => {
  console.log(formLogin.value);
});