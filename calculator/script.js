const input = document.querySelector(".input")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach(btn => btn.addEventListener('click', () => {
    const text = btn.innerText

    if (text == '<') {
        currentInput = input.innerText;

        input.innerText = currentInput.substring(0, currentInput.length-1)
    } else if (text === 'C') {
        input.innerText = ''
    } else if (text === '=') {
        input.innerText = eval(input.innerText)
    } else {
        input.innerText += text
    }
}));
