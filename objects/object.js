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
    
 //primitive or value type -> it is possible to copy the value
let a = 10;
let b = a;
a++;
console.log(a);  //output 11
console.log(b);  //output 10
//reference or object type -> we can not opy its value
let c = {value: 10};
let d = c;
c.value++;
console.log(c.value); //output 11
console.log(d.value); //output 11


let a1=100;

function inc(a1){
    a1++;
    
}
inc();
console.log(a1);

                    // for in loop

 let data={
    name:"vishal",
    age:25,
    city:"gwalior",
    state:"madhya Pradesh"
}

for(let key in data)
{
console.log(key,data[key]);
}

// check wheater a propertu is in object or not
if("name" in data)
{
    console.log("name is present in the object");
}
else
{
    console.log("name is not present in the object");
}
