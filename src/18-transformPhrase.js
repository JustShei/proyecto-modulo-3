function toLeetSpeak(text) {
    var result = ""

    for (var i = 0; i < text.length; i++) {
        var c = text[i]
        var lower = c.toLowerCase()

        if (lower === "a") c = "4"
        else if (lower === "e") c = "3"
        else if (lower === "i") c = "1"
        else if (lower === "o") c = "0"
        else if (lower === "s") c = "5"
        else if (lower === "t") c = "7"
    
        result = result + c
    }

    return result
}

console.log(`Leet Speak Test 1: ${toLeetSpeak("This Is Cool")}`)
console.log(`Leet Speak Test 2: ${toLeetSpeak("Hacker Man")}`)
console.log(`Leet Speak Test 3: ${toLeetSpeak("Hecker L O L so cool")}`)