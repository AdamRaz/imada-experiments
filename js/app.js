let variableText = document.querySelector('.variable-text');
let textArray = ["&#x0643;&#x062A;&#x0633", ]
console.log(variableText.innerHTML);
function repeatedCode () {
    variableText.innerText += " & (ひろこ)";
}
function clearText () {
    variableText.innerText = "Imada";
}
let intervalID = setInterval(repeatedCode, 1500);
let intervalID2 = setInterval(clearText, 6000);