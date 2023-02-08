interface IProduct{
    id: number;
    name: string;
    description: string;
    price?: number;
    display():void;
}

var product:IProduct = {
    id: 123,
    name:"Iphone",
    description:"Its awesome",
    price:1000,
    display():number {
        return this.id
    },
}