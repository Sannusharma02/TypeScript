var hello=function (name:string):string{
    return "Hello "+name;
}
function add(num1:number,num2:number):number{
    return num1+num2;
}

function calculator():any{
    function subtract(num1:number, num2:number):number{
        return num1-num2;
    }
    return subtract;
}

function display(id:number,name:string, role:string="Normal"){
    console.log("id",id);
    console.log("Name",name);
    console.log("Role",role);
    
}
// var sub= calculator();
// console.log(sub(20,5));
console.log(calculator()(10,5));

// console.log(hello('Sannu'));

