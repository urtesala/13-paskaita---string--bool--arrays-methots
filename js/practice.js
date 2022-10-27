"use strict";
console.log("practice.js");

const htmlEls = {
  h1: document.querySelector("h1"),
  p: document.querySelector("p"),
};

//pakeisti <h1>String methods</h1> teksto 'methods' dali i "metodai"

function changeTitle() {
  const currentText = htmlEls.h1.textContent;
  const changedText = currentText.replace(/methods/, "metodai");
  //irasom atgal
  htmlEls.h1.textContent = changedText;
}
changeTitle();

//pakeisti <p>It is all a ok until we have to use loops</p> 'until we' i 'we just'

function changeText() {
  const currentTextP = htmlEls.p.textContent;
  const changedText = currentTextP.replace(/until we/, "we just");
  htmlEls.p.textContent = changedText;
}
changeText();

//3. sukurti funkcija kuri argumentu gauna stringa pvz 'lape' ir sukuria html h3 elementa su viduje esanciu tekstu kurio pirmoji raide paversta i didziaja ir pataplina elementa i dokumento body apacia pvz <h2>Lape</h2>

function makeElCapitalize(str) {
  const capitalizeStr = str.charAt(0).toUpperCase + str.slice(1);
  const h2El = document.createElement("h2");
  h2El.textContent.capitalizeStr;
  document.body.append(h2El);
}
makeElCapitalize("lape");

//! neveikia kodel

const proverb =
  "sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu";

// pakeisti pirma 'sesi' i '6'
const replacedSix = proverb.replace("sesi", "6");
console.log("replacedSix ===", replacedSix);

//pakeisti visus 'sesi' i 'six'

const replaceAllSix = proverb.replace(/sesi /g, "six ");
console.log("replaceAllSix ===", replaceAllSix);
