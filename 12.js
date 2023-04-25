const n = 4

for(let i = 1;i <= n;i++){
    for(let space = 1;space < i;space++){
        process.stdout.write(" ")
    }
    for(let j = n;j >= i;j--){
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
    // console.log()
}

for (let i = 1; i <= n; i++) {
    for (let space = i; space < n; space++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
