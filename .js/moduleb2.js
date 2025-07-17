//using dynamic imports by changing type
//and adding a custom command line in the scripts section of package.json file 
import  modules from "./accmodule2.js";
const {greet,print} =modules;

print(greet(`Mohit`))