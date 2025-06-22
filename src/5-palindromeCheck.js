function palindromo(text) {
    let textOriginal = text
    let textConverse = text.split("").reverse().join("")
    return textOriginal === textConverse
}
console.log(palindromo ("sometemos"))
console.log(palindromo ("abierto"))