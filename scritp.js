

let number = Math.floor(Math.random() * 100);
const input = document.querySelector('.text');
const buttonTha5min = document.querySelector('.submit');
 const ShowTry = document.querySelector('.Show span');
  const Showresult = document.querySelector('.ShowTry span');
const returne = document.querySelector('.return');
 let indexPage = 0;
      console.log(number);    
let array = [];
let op = {};

     buttonTha5min.addEventListener('click' , function(){
      
    

  if (input.value.trim() != "") {

      indexPage++
    
      
      if ( indexPage > 10 && input.value != "") {
       Showresult.innerHTML = "Game Over";
       buttonTha5min.classList.add("none")
       indexPage = 10
      
      
       
     }else{

     if ((input.value) === number) {
        
     Showresult.textContent = "You are is Win ";
     returne.style.display = "block"
       input.value = ""
     }else if (input.value > number.valueOf()) {
        ;
     Showresult.textContent = "This Number is big";
     input.value = ""
     }else if (input.value < number.valueOf()) {
          Showresult.textContent = "This number is low";
           input.value = ""
     }
   
     
     ShowTry.innerHTML = indexPage;
  

    }  
  }else{

    return 0
  }
       
    
    
})
returne.addEventListener('click' , function(){

   location.reload()
})


