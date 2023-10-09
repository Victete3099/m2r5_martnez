input.onButtonPressed(Button.A, function () {
    crono += input.runningTime()
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    basic.showString("---")
})
input.onButtonPressed(Button.B, function () {
    let tiempo = 0
    crono += input.runningTime() - tiempo
    basic.showNumber(Math.idiv(crono, 1000))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pasos)
    pasos += 1
})
let crono = 0
let pasos = 0
pasos = 0
