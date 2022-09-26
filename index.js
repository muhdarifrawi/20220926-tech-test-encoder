// let plaintext = "BGDKKN VNQKC"
let plaintext = "FC/GGJ RJMG."

let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "(", ")", "*", "+", ",", "-", ".",
            "/"]

let newChar = []

createOffset();

function createOffset() {
    let offsetVal = checkOffsetVal(plaintext);
    let setOne = char.slice(-offsetVal);
    let setTwo = char.slice(0, char.length - offsetVal);
    newChar = setOne.concat(setTwo);
    decodeMessage();
}

function checkOffsetVal(plaintext) {
    let textSplit = plaintext.split(" ");
    let offsetChar = textSplit[0][0]
    let searchOffsetVal = char.indexOf(offsetChar);
    return searchOffsetVal
}

function decodeMessage() {
    let prepPlaintext = plaintext.slice(1).split("");

    let translateToIndex = prepPlaintext.map(c => {
        return newChar.indexOf(c)
    })

    let decode = translateToIndex.map(i => {
        if(i == -1){
            return " "
        }
        else {
            return char[i]
        }
    })

    console.log(decode.join(""));
}


