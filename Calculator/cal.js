const compute = (value)=>{
    if (value!= 'del' && value!='ac')
        document.getElementById("display").innerHTML += value 

    if(value=='del'){
        let display_input =document.getElementById("display").innerHTML 
        display_input = display_input.substring(0, display_input.length - 1)        
        document.getElementById("display").innerHTML=display_input 
    }
    
    else if(value=='ac')
        document.getElementById("display").innerHTML="" 
    
    else if (value=='=')
        calculator()
    
}

function calculator () {
    let hold = []     // Holds everything entered in display of calculator
    let disp = document.getElementById('display').innerHTML 
    let hold_counter = 0
    let number = ""
    for (i=0;i<disp.length;i++){
        if(disp[i]=='+' || disp[i]=='-' || disp[i]=='*' || disp[i]=="/" || disp[i]=='=' || i==disp.length){
            hold[hold_counter]=number 
            number="" 
            hold_counter++ 
            if(i!=disp.length) {
                hold[hold_counter]=disp[i] 
                hold_counter++ 
            }
        }
        else
            number += disp[i] 
    }

    for(i=0  ;i<hold.length; i++){
        if(hold[i]=='*' || hold[i]=='/'){
            let firstNumber=parseFloat(hold[(i-1)]) 
            let secondNumber=parseFloat(hold[(i+1)]) 
            if(hold[i]=='/') {
                firstNumber/=secondNumber 
            }
            if(hold[i]=='*') {
                firstNumber*=secondNumber 
            }
            hold.splice((i-1), 1) 
            hold.splice((i), 1) 
            hold[i-1]=firstNumber.toString() 
            i=0 
        }
    }

    for(i=0 ; i<hold.length ;i++){
        if(hold[i]=='-' || hold[i]=='+'){
            let firstNumber=parseFloat(hold[(i-1)]) 
            let secondNumber=parseFloat(hold[(i+1)]) 
            if(hold[i]=='+') {
                firstNumber+=secondNumber 
            }
            if(hold[i]=='-') {
                firstNumber-=secondNumber 
            }
            hold.splice((i-1), 1) 
            hold.splice((i), 1) 
            hold[i-1]=firstNumber.toString() 
            i=0 
        }
    }
    console.log(hold)

    document.getElementById("display").innerHTML=hold[0] 

}
