function countCharacter(text, char) {
    var count = 0

    for (var i = 0; i < text.length; i++) {
        if (text[i] === char) count = count+1
    }
    
    return count;
}

console.log(`Count character test 1: ${countCharacter("banana", "a")}`)
console.log(`Count character test 2: ${countCharacter("table", "a")}`)
console.log(`Count character test 3: ${countCharacter("hello", "l")}`)
console.log(`Count character test 4: ${countCharacter("phomississippine", "s")}`)