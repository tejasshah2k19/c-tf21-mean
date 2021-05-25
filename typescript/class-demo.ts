class Calc{
    firstName:string 
    constructor(firstName:string){
        this.firstName=firstName
    } 
    
    add(){
        console.log("add from calc");
        console.log(this.firstName);//this 
    }
}
let c   = new Calc("gabbar")
c.add()
  


