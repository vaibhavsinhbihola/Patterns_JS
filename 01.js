// for printing pattern number of row times outer loop run and number of column type innerloop runs also check type patterns like *,1,a,...

const n = 5
for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= n; column++) {
        process.stdout.write("*")
    }
    console.log()
}