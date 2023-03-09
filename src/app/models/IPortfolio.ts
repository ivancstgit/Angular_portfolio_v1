export class IPortfolio {
    id?: string;
    description!: string;
    image!: string;
    title!:string;
    state!:boolean;
    type!:string;

    constructor(description: string, image:string,title:string, state:boolean, type:string) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.state= state;
        this.type= type;
    }
}