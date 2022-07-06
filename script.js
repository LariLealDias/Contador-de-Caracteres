const myTextArea = document.getElementById('textarea');
const remainingChars = document.getElementById('remainingCharacters');
var max = 0;

function limit(){
    const remaining = max - myTextArea.value.length;
    const color = remaining <= 10 ? '#eb9961': null;

    remainingCharacters.textContent = remaining + " caracteres restantes";
    remainingCharacters.style.color = color;
};

function MaxCharacters(){
    max = document.getElementById('enteredNumber').value;
    limit();
};

myTextArea.addEventListener('input',() => {
    limit();
});