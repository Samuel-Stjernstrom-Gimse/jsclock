const target = document.getElementById('target')
const letterArray = []
const arrayOfSymbols = ['#', '$', '|', 'x', 'y', 'z', '/', '*', '+', '-', '&', '(', ')', '%', 'i', ':', '?', '}', '[', ']', '{', '=', '<', '>', '"', '!', "''", '::',]
const textColor = 'rgb(63,63,63)'
const textActiveColor = 'rgb(5,234,255)'


const getRandomNumberInRange = (range) => {
    return Math.floor(Math.random() * range);
};

for (let i = 0; i < 138; i++) {
    letterArray.push([])
}

letterArray.forEach((arr) => {
    for (let i = 0; i < 48; i++) {
        arr.push(arrayOfSymbols[getRandomNumberInRange(arrayOfSymbols.length)])
    }
})

letterArray.forEach((arr, index) => {
    const div = document.createElement('div')

    div.classList.add('column')

    arr.forEach((letter, i) => {
        const p = document.createElement('p')
        p.textContent = letter
        p.id = `${index}-${i}`

        console.log(p.id)

        div.append(p)
    })
    target.append(div)
})


const zero = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 0, y: 1}, {x: 5, y: 1}, {x: 0, y: 2}, {
    x: 5, y: 2
}, {x: 0, y: 3}, {x: 5, y: 3}, {x: 0, y: 4}, {x: 5, y: 4}, {x: 0, y: 5}, {x: 5, y: 5}, {x: 0, y: 6}, {
    x: 5, y: 6
}, {x: 0, y: 7}, {x: 5, y: 7}, {x: 0, y: 8}, {x: 5, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9},];

const one = [{x: 3, y: 0}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 3, y: 5}, {
    x: 3, y: 6
}, {x: 3, y: 7}, {x: 3, y: 8}, {x: 3, y: 9},];


const two = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 1}, {x: 5, y: 2}, {x: 5, y: 3}, {
    x: 1, y: 4
}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 0, y: 5}, {x: 0, y: 6}, {x: 0, y: 7}, {x: 0, y: 8}, {
    x: 1, y: 9
}, {x: 1, y: 0}, {x: 5, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9},];

const three = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 1}, {x: 5, y: 2}, {x: 5, y: 3}, {
    x: 1, y: 4
}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 5}, {x: 5, y: 6}, {x: 5, y: 7}, {x: 4, y: 8}, {
    x: 1, y: 9
}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9},];

const four = [{x: 4, y: 0}, {x: 4, y: 1}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 2, y: 3}, {x: 4, y: 3}, {x: 1, y: 4}, {
    x: 4, y: 4
}, {x: 0, y: 5}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 4, y: 6}, {
    x: 4, y: 7
}, {x: 4, y: 8}, {x: 4, y: 9},];

const five = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {
    x: 0, y: 3
}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 5}, {x: 5, y: 6}, {x: 5, y: 7}, {
    x: 1, y: 8
}, {x: 5, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9},];

const six = [{x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 4}, {
    x: 2, y: 4
}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 0, y: 5}, {x: 5, y: 5}, {x: 0, y: 6}, {x: 5, y: 6}, {x: 0, y: 7}, {
    x: 5, y: 7
}, {x: 1, y: 8}, {x: 4, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9},];

const seven = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 5, y: 1}, {
    x: 4, y: 2
}, {x: 4, y: 3}, {x: 3, y: 4}, {x: 3, y: 5}, {x: 2, y: 6}, {x: 2, y: 7}, {x: 1, y: 8}, {x: 1, y: 9},];

const eight = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 0, y: 1}, {x: 5, y: 1}, {x: 0, y: 2}, {
    x: 5, y: 2
}, {x: 0, y: 3}, {x: 5, y: 3}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 0, y: 5}, {
    x: 5, y: 5
}, {x: 0, y: 6}, {x: 5, y: 6}, {x: 0, y: 7}, {x: 5, y: 7}, {x: 1, y: 8}, {x: 4, y: 8}, {x: 1, y: 9}, {
    x: 2, y: 9
}, {x: 3, y: 9}, {x: 4, y: 9},];

const nine = [{x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 0, y: 1}, {x: 5, y: 1}, {x: 0, y: 2}, {
    x: 5, y: 2
}, {x: 0, y: 3}, {x: 5, y: 3}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 5}, {
    x: 5, y: 6
}, {x: 5, y: 7}, {x: 5, y: 8}, {x: 4, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9},];

let count = 0
const masterLoop = () => {
    const timestamp = new Date().getTime()
    const time = new Date(timestamp)
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()
    let s = time.getSeconds().toString()

    if (m < 10) {
        m = '0' + m
    }

    if (s < 10) {
        s = '0' + s;
    }

    if (h < 10) {
        h = '0' + h
    }

    document.querySelectorAll('p').forEach((pT) => pT.style.color = textColor)

    const numberChecker = (number, adder) => {
        let coordinates;
        switch (number) {
            case '0':
                coordinates = zero;
                break;
            case '1':
                coordinates = one;
                break;
            case '2':
                coordinates = two;
                break;
            case '3':
                coordinates = three;
                break;
            case '4':
                coordinates = four;
                break;
            case '5':
                coordinates = five;
                break;
            case '6':
                coordinates = six;
                break;
            case '7':
                coordinates = seven;
                break;
            case '8':
                coordinates = eight;
                break;
            case '9':
                coordinates = nine;
                break;
        }
        coordinates.forEach((c) => {
            document.getElementById(`${c.x + adder + 40}-${c.y + 17}`).style.color = textActiveColor
        })
    }
    numberChecker(h[0], 2)
    numberChecker(h[1], 10)
    numberChecker(m[0], 22)
    numberChecker(m[1], 30)
    numberChecker(s[0], 42)
    numberChecker(s[1], 50)


}
console.log(letterArray)
const switchLetter = () => {
    for (let i = 0; i < 20; i++) {
        document.getElementById(`${getRandomNumberInRange(letterArray.length)}-${getRandomNumberInRange(letterArray[0].length)}`).textContent = arrayOfSymbols[getRandomNumberInRange(arrayOfSymbols.length)]
    }
}
setInterval(switchLetter, 40)
setInterval(masterLoop, 1000)


letterArray.forEach((col, xX) => {
    col.forEach((letter, yY) => {
        if (yY === 0) {
            document.getElementById(`${xX}-${yY}`).textContent = letterArray[xX][col.length - 1];
            letterArray[xX].unshift(letterArray[xX].pop());
        } else {
            document.getElementById(`${xX}-${yY}`).textContent = letterArray[xX][yY];
        }
    });
});