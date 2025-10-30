const f= "appleessss"
const s = "banana"
const t="watermelon"

console.log(f.length);
const n1=f.length;
const n2=s.length;
const n3=t.length;

if(n1>n2 && n1>n3){
    console.log(`${f} has greatest length`);
}

else if(n2>n1 && n2>n3){
    console.log(`${s} has greatest length.`); 
}
else if(n3>n1 && n3>n2){
    console.log(`${t} has greattest length.`);
}
else{
    console.log("Found 2 or more string which has same length.");
}



