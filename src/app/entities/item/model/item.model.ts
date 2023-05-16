export class Item {
    id: number | undefined;
    name: string;
    price: number;
    descripcion?: string;
    image?: string

    constructor(
        id: number | undefined,
        name: string,
        price: number,
        descripcion?: string,
        image?: string 
    ){
        this.id = id
        this.name = name
        this.price = price
        this.descripcion = descripcion
        this.image = image
    }


}