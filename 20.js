const n = 5;

for(let i = 1;i <= n;i++){
    for(j = 1;j <= n-1;j++){
        if(i == 1 || i == n){
            process.stdout.write("*")
        }
        else if(j == 1 || j == 4){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}