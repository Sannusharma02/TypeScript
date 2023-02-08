var email:string ="test@test.com";
var atposition:number = email.indexOf('@');
console.log(atposition);

var dotposition:number =email.indexOf('.')

if(atposition==-1 || dotposition==-1){
    console.log(`password mismatch ${email}`);
}
else{
    console.log('Email is valid');
}