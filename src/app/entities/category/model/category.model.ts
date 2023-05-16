export class Category {
    id: number | undefined;
    name: string;
    descripcion?: string;
    image?: string;

    constructor(
        id: number,
        name: string,
        descripcion?: string,
        image?: string
    ){
        this.id = id
        this.name = name
        this.descripcion = descripcion
        this.image = image
    }
}