//Control Statements
// 1.conditional control statements:
//                 a .if
//                 b .if-else 
//                     if-else if -else
//                 c .switch
// 2.Looping/Iterative Control Statements:
//                 a . While
//                 b . do-while 
//                 c . for 
//                     1.for-in 
//                     2.for-of
// 3.Jumping Statements:
//                 a .Break
//                 b .Continue
// -----------------------Conditional control statements-------------------
// -------------  if  -------------
var a=10
var b=20
if(a<b){
    console.log("this condition is True")
}

//----------  if else  -------------

var a=30
var b=20
if(a<b){
    console.log("this condition is True")
}
else{
    console.log("This condition is false")
}


//--------- if-else if-else -----------

var a=30
var b=20
if(a<b){
    console.log("this condition1 is True")
}
else if(a==b){
    console.log("This condition2 is False")
}
else{
    console.log("Both conditions are False")
}

//--------- Switch ---------------------
var color="Blue"
switch(color)
{
    case "Blue":
        console.log("this is Blue")
        break
    case "black":
        console.log("this is black")
        break
    case "brown":
        console.log("this is brown")
        break
    default:
        console.log("this is default Execution")
        
}

//-------------------------Looping/Iterative Control Statements:-------------------------------

//------------While Loop------------
var count=1
while(count<=10){
    console.log(count)
    count++
}

//-----------Do While Loop-----------

var a=12
do{
    console.log(a)
    a++
}while(a<=11)

//----------- For Loop --------------

// syntax :
// for(expression1;expression2;expression3{
//     //Block of code
// })

for(var i=1; i<=10;i++)
{
    console.log(i)
}

//for of Loop---------iterable----------Array
var ar=[1,2,3,4,5]
console.log(ar)

var ar=[1,2,3,4,5]
for(let i of ar)
{
    console.log(i)
}

//for in Loop -------------Object----Non iterables
var obj={
    firstName:"gayathri",
    mobile: "Vivo"
}
for( let j in obj)
{
    console.log(obj[j])
}