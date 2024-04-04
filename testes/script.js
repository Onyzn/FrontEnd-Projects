var coisa = document.querySelector(".coisa")
var block = document.querySelector(".block")
var buttons = document.querySelectorAll(".buttons button")

// modificações
coisa.innerHTML = 'Fundo laranja!'
coisa.style.backgroundColor = 'orange'
coisa.style.textAlign = 'center'
coisa.style.marginBottom = '5rem'
coisa.style.border = '.5rem solid black'

// modificações (mais de um elemento)
buttons[0].style.backgroundColor = 'orange'

buttons.forEach((btn, i) => {
    btn.innerHTML = 'botão ' + i
})

// eventos
block.addEventListener('click', () => {
    block.innerHTML = 'CLICK'
    block.style.backgroundColor = 'red'
})

block.addEventListener('mouseenter', () => {
    block.innerHTML = 'HOVER'
    block.style.backgroundColor = 'orange'
})

block.addEventListener('mouseout', () => {
    block.innerHTML = 'OUT'
    block.style.backgroundColor = 'green'
})

// evento (mais de um elemento)
buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log('clicou');
    })
})