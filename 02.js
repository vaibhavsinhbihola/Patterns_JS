const n = 5

for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= row; column++) {
        process.stdout.write("*")
    }
    console.log()
}