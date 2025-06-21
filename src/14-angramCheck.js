function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false

    var arr1 = str1.split("")
    var arr2 = str2.split("")

    for (var i = 0; i < arr1.length; i++) {
        var found = false

        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2[j] = null 
                found = true
                break
            }
        }

        if (!found) return false
    }

    return true
}

console.log(`Anagram Test 1: ${isAnagram("listen", "silent")}`)
console.log(`Anagram Test 2: ${isAnagram("hello", "world")}`)
console.log(`Anagram Test 3: ${isAnagram("evil", "vile")}`)
console.log(`Anagram Test 4: ${isAnagram("abc", "cab")}`)