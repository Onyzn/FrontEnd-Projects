const yesBtn = document.querySelector(".sim")
const noBtn = document.querySelector(".nao")
const height = window.innerHeight - 60;
const width = window.innerWidth - 60;

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
}

yesBtn.addEventListener('mouseenter', () => {
    yesBtn.style.backgroundColor = "#00ff00";
})

yesBtn.addEventListener('mouseout', () => {
    yesBtn.style.backgroundColor = "#fff";
})

yesBtn.addEventListener('click', () => {
    window.open("sim.html");
})

noBtn.addEventListener('mouseenter', () =>{
    noBtn.style.position = "absolute"
    noBtn.style.top = Math.random() * height + "px";
    noBtn.style.left = Math.random() * width + "px";
})