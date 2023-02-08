class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerN0: number;

    constructor(firstName: string, lastName: string, frequentFlyerN0: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerN0 = frequentFlyerN0;
    }
    display(){
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerN0;

    }
}

var passenger = new Passenger("John", "Bailey", 123);
passenger.display();


