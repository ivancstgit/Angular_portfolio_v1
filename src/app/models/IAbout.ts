export class IAbout {
    id?: number;
    name: string;
    porcent: string;
    color:string;

    constructor(nombre: string, porcent:string,color:string) {
        this.name = nombre;
        this.porcent = porcent;
        this.color= color;
    }
}