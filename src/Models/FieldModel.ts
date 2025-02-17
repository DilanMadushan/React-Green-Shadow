export default class FieldModel {
    image1:string;
    image2:string;
    fieldCode:string;
    name:string;
    location:string;
    size:number;
    constructor(image1:string,image2:string,fieldCode:string,name:string,location:string,size:number){
        this.image1=image1;
        this.image2=image2;
        this.fieldCode=fieldCode;
        this.name=name;
        this.location=location;
        this.size=size;
    }
}