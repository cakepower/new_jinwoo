let opop = 0
let rotate = 0
let strip2 = neopixel.create(DigitalPin.P13, 14, NeoPixelMode.RGB)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
strip2.setBrightness(100)
basic.forever(function () {
    rotate = pins.digitalReadPin(DigitalPin.P11)
    serial.writeNumber(rotate)
    serial.writeLine("")
    if (rotate == 1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.show()
    } else {
        strip2.setPixelColor(14, neopixel.colors(NeoPixelColors.White))
        strip2.show()
        basic.pause(1000)
        for (let index = 0; index <= 13; index++) {
            rotate = pins.digitalReadPin(DigitalPin.P11)
            if (rotate == 1) {
                break;
            }
            strip2.setPixelColor(13 - index, neopixel.colors(NeoPixelColors.White))
            strip2.setBrightness(100)
            strip2.show()
            basic.pause(2000)
            strip2.setPixelColor(13 - index, neopixel.colors(NeoPixelColors.White))
            strip2.setBrightness(30)
            strip2.show()
            basic.pause(200)
            strip2.setPixelColor(13 - index, neopixel.colors(NeoPixelColors.White))
            strip2.setBrightness(150)
            strip2.show()
            basic.pause(500)
            for (let index2 = 0; index2 <= 4; index2++) {
                opop = 4 - index2
                strip2.setPixelColor(13 - index, neopixel.colors(NeoPixelColors.White))
                strip2.setBrightness(opop * 27)
                strip2.show()
                basic.pause(500)
            }
            strip2.setPixelColor(13 - index, neopixel.colors(NeoPixelColors.Black))
            strip2.show()
            basic.pause(100)
        }
        strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        strip2.show()
        basic.pause(1000)
    }
})
