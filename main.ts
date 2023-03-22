input.onButtonPressed(Button.A, function () {
    radio.sendNumber(numero)
})
let numero = 0
radio.setGroup(1)
basic.forever(function () {
    numero = randint(0, 9)
    basic.showNumber(numero)
    basic.pause(200)
})
