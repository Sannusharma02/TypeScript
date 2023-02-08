var hello= (name:string):string=>{
    return "Hello "+name
};

var multiply= (num1:number,num2:number):number=>{
    return num1*num2;
}

var myarray: Array<any>=[];

for(var i=0; i<10; i++){
    myarray.push(():number=>{return i});
}

// console.log(hello("Sannu"));
// console.log(multiply(5,8));
for(var i=0; i<10; i++){
    console.log(myarray[i]());   
}
