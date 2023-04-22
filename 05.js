const n = 5;
let column = 1;

for (let i = 1; i < 2 * n; i++) {
    for (let j = 1; j <= column; j++) {
        process.stdout.write("*")
    }
    if(i < n){
        column++
    }
    else{
        column--
    }
    console.log()
}