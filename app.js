

const img = document.querySelector(`img`)



img.addEventListener(`mouseover` , function() {
    img.src =  `./assets/Bulb On.png`

})





img.addEventListener(`mouseout` , function() {
    img.src = `./assets/Bulb Off.png`
})