function led2 (y: number, speed: number) {
    while (true) {
        if (direction == 0) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(index, y)
                } else {
                    led.unplot(index, y)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        } else if (direction == 1) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(4 - index, y)
                } else {
                    led.unplot(4 - index, y)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        } else if (direction == 2) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(y, index)
                } else {
                    led.unplot(y, index)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        } else if (direction == 3) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(y, 4 - index)
                } else {
                    led.unplot(y, 4 - index)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    direction += 1
})
let direction = 0
let list: number[][] = []
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
]
]
basic.forever(function () {
    if (direction % 4 == 0) {
        direction = 0
    } else if (direction % 4 == 1) {
        direction = 1
    } else if (direction % 4 == 2) {
        direction = 2
    } else if (direction % 4 == 3) {
        direction = 3
    }
})
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(2, 250)
})
control.inBackground(function () {
    led2(3, 125)
})
control.inBackground(function () {
    led2(4, 70)
})
