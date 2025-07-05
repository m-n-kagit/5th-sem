let word= "  Mohit sharma  ".split(' ')
let res = []
for(let i=word.length - 1; i>=0;i--){
    if(word[i]){
        res.push(word[i]);
    }
}
console.log(res.join(' '));
 