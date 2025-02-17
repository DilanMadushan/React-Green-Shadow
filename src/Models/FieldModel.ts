export default class FieldModel {
    fieldCode:string;
    name:string;
    location:string;
    size:number;
    constructor(fieldCode:string,name:string,location:string,size:number){
        this.fieldCode=fieldCode;
        this.name=name;
        this.location=location;
        this.size=size;
    }
}