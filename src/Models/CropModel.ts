
export default class{
    image:string
    cropCode:string;
    name:string;
    scientificName:string;
    sesson:string;
    category:string;
    field:string;
    constructor(image:string,cropCode:string,name:string,scientificName:string,sesson:string,category:string,field:string){
        this.image=image;
        this.cropCode=cropCode;
        this.name=name;
        this.scientificName=scientificName;
        this.sesson=sesson;
        this.category=category;
        this.field=field;
    }
  }