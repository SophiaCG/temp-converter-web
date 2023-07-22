const numberInput = document.querySelector('.number-input');
const shortSelect = document.querySelector('.short-select');
const longSelect = document.querySelector('.long-select');
const convertButton = document.querySelector('.convert-button');
const tempLabel = document.querySelector('.temp-label');
const degreeSymbol = document.querySelector('.degree-symbol');

convertButton.addEventListener('click', () => {

    const convertFrom = shortSelect.value;
    const convertTo = longSelect.value;
    const inputNum = Number(numberInput.value)

    if (convertFrom == convertTo) {    
        tempLabel.value = inputNum;
    } else {
        if (convertFrom == "F") {
            if (convertTo == "C") {
                // F -> C
                tempLabel.value = (inputNum - 32) * (5/9);
            } else {
                // F -> K
                tempLabel.value = (inputNum + 459.67) * (5/9);
            }
        } else if (convertFrom == "C") {
            if (convertTo == "F") {
                // C -> F
                tempLabel.value = (inputNum * 9/5) + 32;
            } else {
                // C -> K
                tempLabel.value = inputNum + 273.15;
            }
        } else {
            if (convertTo == "F") {
                // K -> F
                tempLabel.value = (inputNum * 9/5) - 459.67;
            } else {
                // K -> C
                tempLabel.value = inputNum - 273.15;
            }
        }    
    }


    tempLabel.textContent = tempLabel.value.toFixed(1);
    degreeSymbol.textContent = `º${longSelect.value}`
});