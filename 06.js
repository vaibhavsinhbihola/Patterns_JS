const n = 5;

for (let i = 1; i <= n; i++) {
    for (let space = 1; space <= (n - i); space++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*")
    }
    console.log()
}