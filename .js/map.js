const newmap = new Map();

newmap.set(10,'value will be here');
newmap.set(11,'awesome')
console.log(newmap);
newmap.forEach((value)=>
{
    console.log(value);
    
}
)
console.log(newmap.has(10));
  //t or f


