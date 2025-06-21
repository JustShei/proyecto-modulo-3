function hasBalancedParentheses(text) {
    var count = 0

    for (var i = 0; i < text.length; i++) {
        if (text[i] === "(") count = count+1
        else if (text[i] === ")") count = count-1
    } 

    if (count < 0) return false

    return count === 0
}

console.log(`Parentheses Test 1: ${hasBalancedParentheses("()")}`)
console.log(`Parentheses Test 1: ${hasBalancedParentheses("(())")}`)
console.log(`Parentheses Test 1: ${hasBalancedParentheses("(()")}`)