const input = document.querySelector('#input');
const boxes = document.querySelectorAll('.boxes');
let string = "";


boxes.forEach((btn,i)=>{
  btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML === "="){
      string = eval(string)
      input.value = string
    }
    else if(e.target.innerHTML === ""){
        input.value = ""
    }
   else if(e.target.innerHTML === "AC"){
      string = ""
      input.value = string
    }
    else if(e.target.innerHTML === "%"){
      string = eval(string)
      input.value = string
    }
    else{
      string += e.target.innerHTML;
      input.value = string
    }
    
  
   
  })
})