// var product = function (...n)
var product = function (x:number,y:number,...n:number[])
 {

    var result=1;
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
        result*=n[i];
    }
    return result;
}
console.log(product(2,4,5,9));
;