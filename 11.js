const n = 5;

for (let i = 1; i <= n; i++) {
    for (space = 1; space < i; space++) {
        process.stdout.write(" ")
    }
    for (let j = n; j >= i; j--) {
        process.stdout.write("* ")
    }
    console.log()
}