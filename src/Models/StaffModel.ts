export default class StaffModel{
    staffId:string;
    firstName:string;
    lastName:string;
    dob:string;
    gender:string;
    joinDate:string;
    address:string;
    mobile:string;
    email:string;
    constructor(staffId:string,firstName:string,lastName:string,dob:string,gender:string,joinDate:string,address:string,mobile:string,email:string){
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.gender = gender;
        this.joinDate = joinDate;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
    }
}