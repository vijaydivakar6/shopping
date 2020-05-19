export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id,name,description='', price=0, imageUrl='https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-5.jpg'){
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    }
}
