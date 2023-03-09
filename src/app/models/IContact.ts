export class IContact {
    id?: number;
    icon: string;
    social_name: string;
    link:string;

    constructor(icon: string, name:string,link:string) {
        this.icon = icon;
        this.social_name = name;
        this.link= link;
    }
}