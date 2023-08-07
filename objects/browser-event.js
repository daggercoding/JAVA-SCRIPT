// IMPLIMENTATION OF EVENT LISTENER
function vishal() {
    console.log("hello my name is vishal singh");
}
let ne = document.querySelector('p');
ne.addEventListener('click',vishal); // ADD EVENT LISTENER
ne.removeEventListener('click',vishal); // REMOVE EVENT LISTENER

// PREVENTING ELEMENTS TO USE ITS DEFAULT BEHAVIOUR
let newone = document.querySelectorAll('a');
let selected = newone[1];

selected.addEventListener('click',function(event){
event.preventDefault(); // PREVENTING TO USE DEFAULT BEHAVIOR
console.log('DEKH RAHE HO VINOD YE HUMSE HUMARA DEFAULT BEHAVIOR CHEEN RAHA HAI')

});

// creating events with the help of a loop

            //  let newDiv=document.createElement('div');
             
             
            //  for(let i=1;i<100;i++){
            //      let newElement=document.createElement('p');
            //      newElement.textContent='hello i am paragraph'+i;
            //      newElement.addEventListener('click',)
            //      newDiv.appendChild(newElement);
            //  }
            //  document.body.appendChild(newDiv);
    
   // OPTIMIZING THE ABOVE CODE         
    let newDiv=document.createElement('div');
    function print(){
        console.log("you hit me bro, I am a Para not Para Commando")
    }
    newDiv.addEventListener('click',print);
    
    for(let i=1;i<100;i++){
        let newElement=document.createElement('p');
        newElement.textContent='hello i am paragraph'+i;
        newDiv.appendChild(newElement);
    }
    document.body.appendChild(newDiv);            
    
