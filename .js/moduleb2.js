//using dynamic imports by changing type
//and adding a custom command line in the scripts section of package.json file 
// import  modules from "./accmodule2.js";
// const {greet,print} =modules;
import {greet,print} from "./accmodule2.js";
//destructing it directly.
//the above ones are not dynamic import 


print(greet(`Mohit`))

//For dynamic import 
const if_import_req =true;

if(if_import_req){
    const {greet} = await import("./accmodule2.js")
    console.log(greet("Mohit"));
    
}