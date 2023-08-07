//                     //FUNCTIONS
// normal();
//  // NORMAL FUNCTION it follows the concept of HOISTING                   
 
//  function normal(){   //function declaration
//  console.log("i am a normal function and called anytwhere with the help of hoisting")
//  }               
 
//  normal();  //function initialization

//  //FUNCTION ASSIGNMENT->HERE WE ADDIGN A FUNCTION TO A VARIABLE IT IS OF TWO TYPES . it do not follow the cpncept of HOISTING
// // 1 NORMAL 
// let function1=function normalAssignment(){ //function name defined
//     console.log("i am a normal function assignment")
// }
// function1();
// //2 ANONMOUS
// let function2=function(){  //function name not defined
//     console.log("i am a anominous function assignment")
// }
// function2();

// //HOISTING-> IT IS A PROCESS IN WHICH THE JS ENGINE SENDS ALL THE NORMAL FUNCTION TO THE TOP OF THE PROGRAM AND BECAUSE OF WHICH YOU CAN CALL THE NARMAL FUNCTION ANYWHERE IN THE PROGRAM
// normal();

// //CREATING A DYNAMIC FUNCTION FOR ADDITION

// function add()
// {
//     let total=0;
//     for(let value of arguments)
//     {
//         total=value+total;
//     }
//     return total;
// }
// console.log("it is dynamic and we can pass multiple parameters as much as we can : ",add(1,3,2,444,54,544,54,545,454,544,54545,45)) //we can give any numbers of input

// function sub(a,b)
// {
    
//     return a-b;
// }
// console.log("this is the subtraction and not dynamic fixed numbers of parameter can be passed : ",sub(10,5))

let vishal= [1,2,3,4]

let total= vishal.reduce((accu,curent)=>accu+curent,0);

console.log(total)