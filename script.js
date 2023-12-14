const generatedTextInput = document.getElementById("generatedTextInput");
const rangedTypeRadio = document.getElementById("rangedTypeRadio");
const startValueInput = document.getElementById("startValueInput");
const endValueInput = document.getElementById("endValueInput");
const fixedTypeRadio = document.getElementById("fixedTypeRadio");
const fixedValueInput = document.getElementById("fixedValueInput");
const charsList = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
    "`~!@#$%^&*()-_=+[{]}\|;:\"',<.>?/"
];
const lengthLongestCharList = charsList.length;

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor((Math.random() * (maxNumber + 1)) + minNumber);
}

function copyText() {
    navigator.clipboard.writeText(generatedTextInput.value);
}

function generateText() {
    let generatedTextValue = "";
    let chars = charsList[getRandomNumber(0, 3)];
    let char = chars[getRandomNumber(0, charsList.length)];
    const maxGeneratedTextValue = fixedTypeRadio.checked ?
        parseInt(fixedValueInput.value) :
        getRandomNumber(
            parseInt(startValueInput.value),
            parseInt(endValueInput.value)
        );

    while (generatedTextValue.length <= maxGeneratedTextValue) {
        generatedTextValue += char;

        chars = charsList[getRandomNumber(0, 3)];
        char = chars[getRandomNumber(0, charsList.length)];
    }

    generatedTextInput.value = generatedTextValue;

    return false;
}

function onLengthTypeSelected() {
    if (fixedTypeRadio.checked) {
        fixedValueInput.disabled = false;
        startValueInput.disabled = true;
        endValueInput.disabled = true;
    } else if (rangedTypeRadio.checked) {
        fixedValueInput.disabled = true;
        startValueInput.disabled = false;
        endValueInput.disabled = false;
    }
}