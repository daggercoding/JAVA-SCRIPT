// create a simple object
let details={
    name:"vishal singh",
    age:25,
    adress: "gwalior"
}
details.name; //.notation to acess the object data
details.age;
details["adress"];

let rectangle=
{
    lenght:10,
    breadth:20,
    draw:function ()
    {
    console.log("i am a module inside the object") 
    }
}
                    //FACTORY FUNCTION
//created a normal function
function createFunction(len,bre){ //passing two parameters in function 
   return rectangle={
   lenght:len,   //storing the value of len and bre in lenght and breadth
   breadth:bre
   }}

   //initializing the function and storing the value in variable
let rectangle1 = createFunction(50,60);

const rectangle2= createFunction(80,90);

let rectangle3=createFunction(50,120)


                // construction function
//it used pascal notation -> every starting letter od wors is capital 
// we do not have to return the values
function CreateCuboid(len,bre,hei){
    this.lenght=len,
    this.breadth=bre,
    this.height=hei,
    this.draw1=function(){
        console.log("hello from the module")
    }
}
//here we have to use new keywprd which create an empty object
 let cuboid1=new CreateCuboid(10,20,30); 

 cuboid1.color="white"; //dynamically add a property in object
 delete cuboid1.breadth; //dynamically DELETE a property FROM object
    
 