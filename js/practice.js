"use strict";
console.log("practice.js");

const proverb =
  "sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu";

const htmlEls = {
  h1: document.querySelector("h1"),
  sent1: document.querySelector("#sent1"),
  vardaiFieldset: document.getElementById("vardaiFieldset"),
  vardasInput: document.getElementById("vardas"),
  kiekInput: document.getElementById("kiek"),
  makeNamesBtn: document.getElementById("makeNamesBtn"),
  theOne: document.getElementById("theOne"),
};
// console.log(htmlEls);
// const h1El = document.querySelector('h1');

function changeH1() {
  const currentText = htmlEls.h1.textContent; //String methods
  const changedText = currentText.replace("methods", "metodai");
  // irasyti atgal i elementa
  htmlEls.h1.textContent = changedText;
}

changeH1();

function changeText() {
  const currentText = htmlEls.sent1.textContent;
  const changedText = currentText.replace("until we", "we just");
  htmlEls.sent1.textContent = changedText;
}
changeText();

changeTextContent(htmlEls.h1, "methods", "metodai");
changeTextContent(htmlEls.sent1, "until we", "we just");

function changeTextContent() {}

// 3. sukurti funkcija kuri argumentu
/**
 *  Makes h2 element, capitalizes argument and puts it in the body
 * @param {string} str
 */
function makeElCapitalize(str) {
  const capitalizeStr = str.charAt(0).toUpperCase() + str.slice(1);
  // console.log('capitalizeStr ===', capitalizeStr);
  const h2El = document.createElement("h2");
  h2El.textContent = capitalizeStr;
  document.body.append(h2El);
}
makeElCapitalize("lape");
makeElCapitalize("monkey");

// pakeisti pirma sesi i 6

function changeFirst6() {
  const rez = proverb.replace("sesi", 6);
  console.log("rez ===", rez);
}
changeFirst6();

// pakeisti visus sesi i 6

function changeAll6() {
  let rez = proverb.replace(/sesi /g, "6 ");
  rez = rez.replace("sesiu", 6);
  console.log("rezall ===", rez);
}
changeAll6();

// 5.  Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą -

function makeNames() {
  console.log("paspaudei");

  // pasiimti reiksmes is name ir kiek

  // jei kiek yra sveikasis skaicius
  /// spausdina tiek h2 el, koks ivestas sk
  // else alert kad kazkas negerai
}

htmlEls.makeNamesBtn.addEventListener("click", makeNames);

// 6. all the one lis

const allLis = htmlEls.theOne.querySelectorAll("li");
// const allLis = htmlEls.theOne.children;
console.log("allLis ===", allLis);

// for of
// function addWordToLis() {
//   for (let liEl of allLis) {
//     changeOneLi(liEl);
//   }
// }
// forEach
function addWordToLis() {
  allLis.forEach(changeOneLi);
}
addWordToLis();

/**
 *
 * @param {HTMLElement} liElement
 */
function changeOneLi(liElement, i, arr) {
  // const nowText = liElement.textContent;
  // const changedText = `now ${nowText}`;
  // liElement.textContent = changedText;

  liElement.insertAdjacentText("afterbegin", `${i + 1} was `);
  // liElement.insertAdjacentText('afterbegin', `${arr.length - i} was `);
}
