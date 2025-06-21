function fetchCentury(year) {
    return Math.floor((year-1)/100) + 1
}

console.log(`Century Test 1: ${fetchCentury(2000)}`)
console.log(`Century Test 2: ${fetchCentury(2001)}`)
console.log(`Century Test 3: ${fetchCentury(1905)}`)
console.log(`Century Test 4: ${fetchCentury(1)}`)
console.log(`Century Test 5: ${fetchCentury(100)}`)