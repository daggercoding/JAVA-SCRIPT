//CREATION OF ARRAY
let myname=[1,2,3,5,6,"vishal","singh"]
console.log(myname);

//SEARCHING INDEXOF INCLUDES (PRIMITIVE DATA TYPES)
//finding the index value of element
console.log(myname.indexOf("vishal"));
// checking whether element is presented or not
console.log(myname.includes("vishal"));

//INSERTION UNSHIFT,PUSH,SPLICE
// insertion at start
console.log(myname.unshift(1,"vishal","singh"))

//insertion at end
console.log(myname.push("last"))

//insertion at middle
console.log(myname.splice(0,2,'vishal','singh'))


//DELETION ON ELEMENTS FROM THE ARRAY SHIFT,POP,SLICE
// FROM BIGINNING
console.log(myname.shift()); //biggining
console.log(myname.pop());  //last
console.log(myname.splice(4,1)); //middle

//CALL BACK FUNCTION FOR THAT CREATING AND ARRAY OF OBJECTS

let detail = [    //array of object
    {name:"mera naam"},
    {lastName:'nahi bataunga'}
];
console.log(detail);

let course = detail.find(course=>course.name==="mera naam") //call back function (function inside function)
console.log(course);

//                        EMPTY A ARRAY 

let numbers = [1,2,5,7,75,74,84,49,66];
numbers=[];   //first way
numbers.lenght=0;


console.log(numbers.indexOf(5));  //second way
numbers.splice(0,numbers.length);
console.log(numbers) 


//                       adding two arrays
let array1 =[1,2,3,4,5,6,57,8]
let array2 =[100,5,4,7,8,96,7]

let newArray=array1.concat(array2) //comnbine with concat method
console.log(newArray)

let newArray2=[...array1,"new",...array2,'character added'];
console.log(newArray2)
//                 iterrating all the elements of array forof foreach
for(let key of newArray2)
{
    console.log(key)
}

newArray2.forEach(number=>console.log(number))

//                        deleting from  arra(slice)                       

let afterDelete = newArray.slice(3,10)//delete values from 3rd to 9th index

//                        fltering of array
 let price=[1100,2500,66545,65,24,3,5514524]
 let filteresPrice=price.filter(prices=>prices<=50000);
 console.log(filteresPrice);


 //                        MAPPING

let mapping = [101,102,103,104,105]; // map each and every elemets
let modified=mapping.map(function(value){
    return 'my chest number is:'+value
});
console.log(modified);

let mapping1 = [1,56,27,5,7,4,-555,-54,-65,-6,4] //created objects
let filtered = mapping1.filter(value=> value>=0);
console.log(filtered);
let modified1= filtered.map(function(values){
    return {value:values}
});
console.log(modified1);


