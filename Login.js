class Login{
    constructor(){
this.name=createInput("Name")
this.emailId=createInput("Email Id")
this.mobileNo=createInput("Mobile Number")
this.DOB=createInput("Date of Birth (dd/mm/yy)")
    }
    display(){
        this.name.position(200,200)
        this.emailId.position(300,300)
        this.mobileNo.position(width/2,height/16)
        this.DOB.position(width/2,height/14)

    }
}