const textGeneratorForm = document.getElementById("textGeneratorForm");
const generatedTextInput = document.getElementById("generatedTextInput");
const copyTextButton = document.getElementById("copyTextButton");
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

addEventListeners();

function addEventListeners() {
    textGeneratorForm.addEventListener("submit", generateText);
    textGeneratorForm.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    copyTextButton.addEventListener("click", copyText);
    fixedTypeRadio.addEventListener("click", updateValueInputStatus);
    rangedTypeRadio.addEventListener("click", updateValueInputStatus);
}

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor((Math.random() * (maxNumber + 1)) + minNumber);
}

function getRandomChar() {
    const selectedCharList = charsList[getRandomNumber(0, (charsList.length - 1))];
    return selectedCharList[getRandomNumber(0, (selectedCharList.length - 1))];
}

function copyText() {
    navigator.clipboard.writeText(generatedTextInput.value);
}

function generateText() {
    let generatedTextValue = "";
    const maxGeneratedTextValue = fixedTypeRadio.checked ?
        parseInt(fixedValueInput.value) :
        getRandomNumber(
            parseInt(startValueInput.value),
            parseInt(endValueInput.value)
        );

    while (generatedTextValue.length <= maxGeneratedTextValue) {
        generatedTextValue += getRandomChar();
    }

    generatedTextInput.value = generatedTextValue;
}

function updateValueInputStatus() {
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