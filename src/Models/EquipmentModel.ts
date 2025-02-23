export default class EquipmentModel {
    equipmentId:string;
    name:string;
    type:string;
    status:string;
    field:string
    staff:string
    constructor(equipmentId:string,name:string,type:string,status:string,field:string,staff:string){
        this.equipmentId=equipmentId;
        this.name=name;
        this.type=type;
        this.status=status;
        this.field=field;
        this.staff=staff;
    }
}