export class Persona {
    id?: number;
    name: string;
    profile_img: string;
    description:string;

    constructor(nombre: string, prof:string,desc:string) {
        this.name = nombre;
        this.profile_img = prof;
        this.description= desc;
    }
}


