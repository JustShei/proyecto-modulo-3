function romanToArabic(roman) {
    var values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500, 
        M: 1000
    }

    var total = 0

    for (var i = 0; i < roman.length; i++) {
        var current = values[roman[i]]
        var next = values[roman[i+1]]

        if (next > current) {
            total = total+(next-current)
            i++
        } else total = total+current
    }

    return total
}

console.log(`Roman Test 1: ${romanToArabic("III")}`)
console.log(`Roman Test 2: ${romanToArabic("IV")}`)
console.log(`Roman Test 3: ${romanToArabic("IX")}`)
console.log(`Roman Test 4: ${romanToArabic("XIV")}`)
console.log(`Roman Test 5: ${romanToArabic("MCMXC")}`)