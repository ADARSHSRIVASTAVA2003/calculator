const buttons=document.querySelectorAll('.btn');
const display=document.getElementById('display')
let currentInput="";
let displayressult=false;


buttons.forEach(button=>{
    button.addEventListener('click',function(){
        const value=this.getAttribute("data-value");
        console.log(value)
        if(value==='='){
            try{
                currentInput=calculateResult(currentInput);
                display.textContent=currentInput;
                displayressult=true;
            }catch(error){
                display.textContent="ERROR";
                currentInput="";
                displayressult=false;
            }
           
        }
        else if(value==='c'){
            currentInput='';
            display.textContent="0";
        }
        else if(value==='X'){
            currentInput=currentInput.slice(0,-1);
            display.textContent=currentInput||0;
        }else{
            if(displayressult){
                currentInput=value;
                displayressult=false;
            }else{
                currentInput+=value;
            }
            display.textContent=currentInput;
        }
    })
})


 function calculateResult(input){
    input=input.replace(/sqrt/g,'Math.sqrt');
    input  =input.replace(/1\/x/g,'1/');
    input  =input.replace(/π/g,'Math.PI');
    input  =input.replace(/√/g,'Math.sqrt');
    input  =input.replace(/x^2/g,'');
    // Math.sqrt
    
    // input=input.replace(/())
    return eval(input)
}

// console.log("hii")