// let char = String.fromCharCode(65);  // ASCII for 'A'
// console.log(char);  // Output: 'A'
// for (let i = 65; i <= 90; i++) {
//     console.log(String.fromCharCode(i));  // Prints A to Z
// }
// let code = 'A'.charCodeAt(0);  // 65
// console.log(code);

// //for reversing a string value 
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

/*assign1 -> 
 geeks ->iggmu
*/ 
const str1 = "geeks"
let str2="";
for(let c of str1){
    str2+=String.fromCharCode(c.charCodeAt(0)+2);    
}
console.log(str2);





