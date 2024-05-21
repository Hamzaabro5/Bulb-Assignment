

const img = document.querySelector(`img`)



img.addEventListener(`mouseover` , function() {
    img.src =  `https://i.pinimg.com/736x/8b/e0/60/8be0603fa9222908eac38746f7c72c2a.jpg`

})





img.addEventListener(`mouseout` , function() {
    img.src = `./assets/Bulb Off.png`
})