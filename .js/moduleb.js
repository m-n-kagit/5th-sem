function greet(name){
    return `Welcome ${name} in the world of js.`
}

function print(p){
    console.log(p);
}
//we use common js module 
//one another js module called as es module

module.exports = {
    print,
    greet
}