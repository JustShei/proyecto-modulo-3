function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return true
            else return false
        } else return true
    } else return false
}

console.log(`Leap year test 1: ${isLeapYear(2020)}`)
console.log(`Leap year test 2: ${isLeapYear(1900)}`)
console.log(`Leap year test 3: ${isLeapYear(2000)}`)