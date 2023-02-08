function doubleMe(y:number);
function doubleMe(y:string);

function doubleMe(x:any){
    if(x && typeof x==="number")
    console.log(x);
    else if(x && typeof x==="string")
    console.log(x+" "+x);
}

doubleMe(1);
// doubleMe([1]);
doubleMe("sannu")