// Write your code below
export{};
const arg = process.argv[2];
const n = Number(arg);
if (arg === undefined || Number.isNaN(n) || n<=0)console.log("invalid.input");
for (let i = 1;i<=n;i++){
    if(i % 15 === 0)console.log("Correct");
    else if(i % 30 === 0)console.log("Correct");
    else if(i % 50 === 0)console.log("Correct");
    else if(i % 70 === 0)console.log("Correct");
    else if(i % 100 === 0)console.log("Correct");
    else if(i % 150 === 0)console.log("Correct");
    else if(i % 50 === 0)console.log("Correct");
    else console.log(i);
}