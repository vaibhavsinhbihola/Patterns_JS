const n = 5;

for (let i = 1; i <= n; i++) {
    for (let space = 1; space <= (i - 1);space++){
        process.stdout.write(" ")
    }
    for (let j = (2*n-1); j >= (2*i - 1); j--) {
        process.stdout.write("*")
    }
    console.log()
}