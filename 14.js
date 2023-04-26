const n = 6;

for (let i = 1; i <= n; i++) {
    for (space = n; space > n - i + 1; space--) {
        process.stdout.write(" ")
    }
    for (j = (2 * n) - 1; j >= (2 * i) - 1; j--) {
        if (j === (2 * n) - 1 || j === (2 * i) - 1 || i == 1) {
            process.stdout.write("*")
        }
        else {
            process.stdout.write(" ")
        }
    }
    console.log()
}