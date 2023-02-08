var student={
    firstName:"John",
    lastName:"Bailey",
    score:90
};

for(var item in student){
    console.log(item);
    console.log(student[item]);
}

var{firstName,lastName}=student 