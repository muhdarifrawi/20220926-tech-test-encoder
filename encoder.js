let encoderChar = "B"
let message = "HELLO WORLD"

let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "(", ")", "*", "+", ",", "-", ".",
            "/"]

let newChar = []

function startEncode(){
    createOffset(encoderChar)
}

function createOffset(encoderChar) {
    let offsetVal = char.indexOf(encoderChar);
    let setOne = char.slice(-offsetVal);
    let setTwo = char.slice(0, char.length - offsetVal);
    newChar = setOne.concat(setTwo);
    // console.log(newChar)
    encodeMessage(message);
}

function encodeMessage(message) {
    let prepPlaintext = message.split("");
    // console.log(prepPlaintext)

    let translateToIndex = prepPlaintext.map(c => {
        return char.indexOf(c)
    })

    let encode = translateToIndex.map(i => {
        if(i == -1){
            return " "
        }
        else {
            return newChar[i]
        }
    })

    let encoded = encoderChar + encode.join("")

    console.log(encoded);
    return encoded
}

module.exports = {
    startEncode
}
