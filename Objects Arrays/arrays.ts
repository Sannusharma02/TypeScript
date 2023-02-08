var courses:Array<string |number>; 
// var courses :any=["Angular","React","ES6","JMS"];
courses=["Angular","React","ES6","JMS"];
courses.push("Spring Security");
// courses.push(10);

for (var i=0;i<courses.length;i++){
    console.log(courses[i]);
}

var x=courses[0];
var y= courses[1];


var[a,b,c]=courses;

console.log(a,b,c);
