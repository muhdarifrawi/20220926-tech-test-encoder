let decoder = require("./decoder")
let encoder = require("./encoder")
var prompt = require('prompt-sync')();

let running = true;

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
        let encodeChar = prompt("Select a single character: ")
        validateSingleChar(encodeChar)
    }
    else if (choice.toLowerCase() == "decode") {
        console.log("Decode")
    }
    else {
        console.log("Invalid entry. Select either 'Encode' or 'Decode'.")
    }
    // console.log(decoder.startDecode("BGDKKN VNQKC"));
    // console.log(encoder.startEncode("B","HELLO WORLD"));
}

function validateSingleChar(strEntry) {
    let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "(", ")", "*", "+", ",", "-", ".",
        "/"]

    if(strEntry.length < 1){
        return "Entry should be a single character."
    }

    if(char.indexOf(strEntry) == -1){
        return "Invalid char. Select another char."
    }

}

