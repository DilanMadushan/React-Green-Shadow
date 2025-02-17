export default class LogModel{
    logCode:string;
    image:string;
    date:string;
    field:string;
    crop:string;
    staff:string;
    constructor(logCode:string,image:string,date:string,field:string,crop:string,staff:string){
        this.logCode=logCode;
        this.image=image;
        this.date=date;
        this.field=field;
        this.crop=crop;
        this.staff=staff;
    }
}