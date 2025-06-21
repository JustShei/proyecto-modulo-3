function devolver(num) {
    let base = [94, 50, -8, 35, 864, 2]
    base = base.sort((a, b) => b-a)
    console.log(base)
    return base[0]
}
console.log(devolver());