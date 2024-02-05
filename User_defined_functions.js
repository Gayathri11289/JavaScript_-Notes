// User Defined Function
//         1.Function Declaration
//         2.Function Expression 
//         3.Anonymous Function
//         4.Arrow Function

// -----------------1.Function Declaration-------
// function name(params) {
//     //function Block
// }
// //parameters are not mandotary
// Ex:
// #1
// var a
// var b
// function display(a,b)
// {
//     alert(a+b)
// }
// display(10,20)
// #2
// var a
// var b
// function display(a,b)
// {
//     confirm(a+b)
// }
// display(10,20)

//--------------Function Declaratio without parameters --------------------
// #3
// function display()
// {
//     confirm("this is function Declaration")
// }
// display()
// #4
// function display()
// {
//     var a=10
//     var b=6
//     return a*b
// }
// result=display()
// console.log(result)

//-----------------------2.Function Expression ---------------------------
//  var functionName = function(parameters)
//  {
//     // Function Body
//  }

// 2.Function Expression:
// Example

// var display=function()
// {
//     var a=5
//     var b=2
//     if(a>b)
//     {
//         alert("This condition is True")
//     }
//     else   
//     {
//         alert("this condtion is false")
//     } 
// }
// display()

//------------------------3.Anonymous Function-----------------------------
// function(parameters){
//     //function Body
// }

//Ex:
(function() {
    console.log('IIFE');
})();



//-----------------------4.Arrow Function-------------------------------

// var display=(a,b)=>
// {
//     return a/b
// }
// var result=display(1,2)
// alert(result)