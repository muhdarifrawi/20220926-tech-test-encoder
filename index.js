let decoder = require("./decoder")
let encoder = require("./encoder")
var prompt = require('prompt-sync')();

let running = true;
let choiceEntered = false;

let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "(", ")", "*", "+", ",", "-", ".",
    "/"]

while (running == true) {
    run()
}

function run() {
    let choice = prompt("Select an option (Encode/Decode/Exit): ");

    if (choice.toLowerCase() == "exit") {
        console.log("Goodbye")
        running = false;
        return
    }
    else if (choice.toLowerCase() == "encode") {
        let encodeChar = "";
        let encodeMsg = ""
        let validChar = false;
        let validMsg = false;
        while (encodeChar.length < 1 || encodeChar.length > 1 || !validChar) {
            encodeChar = prompt("Select a single character: ").toUpperCase()
            validChar = validateSingleChar(encodeChar)
            if (validChar) {
                encodeChar = encodeChar
            }
            // console.log(encodeChar.length, encodeChar.length < 1, encodeChar.length > 1, validChar)
        }

        while (!validMsg) {
            encodeMsg = prompt("Please enter your message: ").toUpperCase()
            validMsg = validateMsg(encodeMsg)
        }
        // let encodeChar = prompt("Select a single character: ")
        console.log("Encoding . . .");
        console.log(encoder.startEncode(encodeChar, encodeMsg));
    }
    else if (choice.toLowerCase() == "decode") {
        let decodeMsg = ""
        let validMsg = false;

        while (!validMsg) {
            decodeMsg = prompt("Please enter your message: ").toUpperCase()
            validMsg = validateMsg(decodeMsg)
        }
        // let encodeChar = prompt("Select a single character: ")
        console.log("Decoding . . .")
        console.log(decoder.startDecode(decodeMsg));
        
    }
    else {
        console.log("Invalid entry. Select either 'Encode' or 'Decode'.")
    }
    // console.log(decoder.startDecode("BGDKKN VNQKC"));
    // console.log(encoder.startEncode("B","HELLO WORLD"));
}

function validateSingleChar(charEntry) {
    if (charEntry.length > 1) {
        console.log("Entry should be a single character.")
        return false
    }

    if (char.indexOf(charEntry) == -1) {
        console.log("Invalid character. Select another character.")
        return false
    }
    else {
        return true
    }

}

function validateMsg(msgEntry) {
    if (msgEntry.length < 1) {
        console.log("Messages must contain one character minimum.")
        return false
    }

    msgEntry = msgEntry.replace(/\s+/g, '');
    let msgArray = msgEntry.split("");

    let filteredMsg = msgArray.filter(e => {
        if (char.indexOf(e) == -1) {
            return e
        }
    })

    if (filteredMsg.length >= 1) {
        console.log("Message contains invalid character.")
        return false
    }
    else {
        return true
    }
}


