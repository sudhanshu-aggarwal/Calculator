// let num = document.querySelectorAll('.num');
// let opr = document.querySelectorAll('.opr');
// let eq = document.querySelector('.eq');
// let inp = document.getElementById('inp');
// let input1;
// inp.value="";

// let gd = document.querySelectorAll('#container button');

// Array.from(gd).forEach(elements=>{
//     elements.addEventListener("click", function(event)
//     {
//         input1 = elements.innerHTML;
//         if(input1 == "=")
//         {
//             calc();
//         }
//         else if(input1 == "Clear")
//         {
//             inp.value = "";
//         }
//         else{
//             inp.value += input1;
//         }
        
//     })
// })

// function calc() {
//     let abc = inp.value;
//     for(let i=0;i<abc.length;i++)
//     {
//         if(isNaN(abc[i]))
//         {

//         }
//     }
// } 
let num = document.querySelectorAll('.num');
let inp = document.getElementById('inp');
let opr = document.querySelectorAll('.opr');
let eq = document.querySelector('.eq');
let cl = document.getElementById('btn');
let input1='';
let sum=null;
let xy;
let flag=0;
Array.from(num).forEach(elements=>{
        elements.addEventListener("click", function(event)
        {
            inp.value += elements.innerHTML;
            input1 += elements.innerHTML;
        })
    });

Array.from(opr).forEach(elements=>{
    elements.addEventListener("click", function(event)
    {
        
        let a = elements.innerHTML;
        if (flag==0)
        {
            switch(a)
        {
            case "+" :
                // console.log(input1 + "inputb");
                sum += Number(input1);
                input1="";
                // console.log(input1 + "input");
                inp.value = "";
                // console.log(sum);
                // console.log(inp.value);
                break;
            case "-" :
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum - Number(input1);
                }
                
                // sum -= Number(input1);
                
                input1="";
                inp.value = "";
                break;
            case "*" :
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum * Number(input1);
                }
                // sum *= Number(input1);
                input1="";
                inp.value = "";
                break;
            case "/" :
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum /= Number(input1);
                }
                
                
                
                input1="";
                inp.value = "";
                break;
        }
        flag++;
        }
        else{
            switch(xy)
        {
            case "+" :
                // console.log(input1 + "inputb");
                sum += Number(input1);
                input1="";
                // console.log(input1 + "input");
                inp.value = "";
                // console.log(sum);
                // console.log(inp.value);
                break;
            case "-" :
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum - Number(input1);
                }
                
                // sum -= Number(input1);
                
                input1="";
                inp.value = "";
                break;
            case "*" :
                
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum * Number(input1);
                }
                
                // sum *= Number(input1);
                input1="";
                inp.value = "";
                break;
            case "/" :
                
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum /= Number(input1);
                }
                
                
                input1="";
                inp.value = "";
                break;
        }
        }
        
        xy = elements.innerHTML;
    })
});



eq.onclick = function() {
    switch(xy)
        {
            case "+" :
                // console.log(input1 + "inputb");
                sum += Number(input1);
                input1="";
                // console.log(input1 + "input");
                inp.value = "";
                // console.log(sum);
                // console.log(inp.value);
                break;
            case "-" :
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum - Number(input1);
                }
                
                // sum -= Number(input1);
                
                input1="";
                inp.value = "";
                break;
            case "*" :
                
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum = sum * Number(input1);
                }
                
                // sum *= Number(input1);
                input1="";
                inp.value = "";
                break;
            case "/" :
                
                if(sum==null)
                {
                    sum = Number(input1);
                }
                else{
                    sum /= Number(input1);
                }
                
                
                input1="";
                inp.value = "";
                break;
        }
    flag = 0;
    inp.value = sum;
    input1 = sum;
    sum = null;
    
}

cl.onclick = function() {
    
    inp.value = "";
    input1 = "";
    sum = null;
}

