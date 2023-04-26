const n = 6;

for (let i = 1; i <= n; i++) {
    for (let space = 1; space <= n - i; space++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= (2 * i) - 1; j++) {
        if (j === 1 || j === (2 * i) - 1) {
            process.stdout.write("*")
        }
        else {
            process.stdout.write(" ")
        }
    }
    console.log()
}
for (let i = 1; i <= n ; i++) {
    for (let space = n ; space > n - i ; space--) {
        process.stdout.write(" ")
    }
    for (let j = (2 * n) - 3; j >= (2 * i) - 1; j--) {
        if (j === (2 * n) - 3 || j === (2 * i) - 1) {
            process.stdout.write("*")
        }
        else {
            process.stdout.write(" ")
        }
    }
    console.log()
}