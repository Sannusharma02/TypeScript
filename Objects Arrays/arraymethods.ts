var levels:number[]=[12,13,40,50,32,23];
console.log(levels.toString());
console.log(levels.join(", "));
console.log(levels.slice(3,5));
console.log(levels.slice(3));
levels.splice(2,3,88,99);
console.log(levels.toString());
levels.push(10,20,30);
console.log(levels.toString());
levels.pop();
console.log(levels.toString());


