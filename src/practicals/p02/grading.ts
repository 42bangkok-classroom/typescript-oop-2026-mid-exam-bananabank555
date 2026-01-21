// Write your code below
export{}
const arg:string |undefined = process.argv[2]
const score:number = Number(arg)

if(
    arg === undefined ||
    Number.isNaN(score) ||
    score < 0 ||
    score > 100
){
    console.log("invalid.input");

}

if (score>=80) console.log("A");
else if (score<=100) console.log("A");
else if (score<=79) console.log("B");
else if (score>69) console.log("B");
else if (score<=69) console.log("C");
else if (score>=60) console.log("C");
else if (score<=59) console.log("D");
else if (score>49) console.log("D");
else if (score<=49) console.log("F");
else if (score>=0)console.log("F");