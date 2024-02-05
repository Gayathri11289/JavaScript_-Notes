// -------------------------------Operators--------------------------------------------
// 1.Arithmatic Operators
// 2.Assignment Operators
// 3.Comparision Operators
// 4.String Operators
// 5.Logical Operators


// 1--------Arithmatic Operators----------
// a.Addition (+)
// b.Subtraction(-)
// c.Multiplication(*)
// d.Division(/)
// e.Modulus(%)
// f.Exponentation(**)
// g.Increment(++)
// h.Decrement(--)

var a=10
var b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a/b)
console.log(a%b)

var a=10
console.log(a)
a++
console.log(a)

var a=10
console.log(a)
a--
console.log(a)

// -------------------------Assignment Operators-------------------------------------

// 1 =             a=b                 a=b
// 2 +=            a+=b                a=a+b
// 3 -=            a-=b                a=a-b
// 4 *=            a*=b                a=a*b
// 5 **=           a**=b               a=a**b
// 6 /=            a/=b                a=a/b
// 7 %=            a%=b                a=a%b
//---------------=-----------
var a=10
var b=a
console.log(a)
console.log(b)
//------------ += -------------
var a=10
var b=5
a+=b
console.log(a) 
console.log(b)
//------------(-=)------------
var a=10
var b=5
a-=b
console.log(a) 
console.log(b)
//-----------(*=)-------------
var a=10
var b=5
a*=b
console.log(a) 
console.log(b)
//-----------(**=)----------
var a=10
var b=5
a**=b
console.log(a) 
console.log(b)
//-----------(/=)-----------
var a=10
var b=5
a/=b
console.log(a) 
console.log(b)
//-----------(%=)-----------
var a=10
var b=5
a%=b
console.log(a) 
console.log(b)

// ------------------------Comparision Operators--------------------------------------
// 1.Double equal (==)
// 2.Greater than (>)
// 3.Less than (<)
// 4.Greater than or Equal too (>=)
// 5.Less than or Equal too (<=)
// 6.Not Equal too (!=)

// 1.Double equal (==)
var a=10
var b=15
console.log(a==b) 

// 2.Greater than (>)
var a=10
var b=15
console.log(a>b) 

// 3.Less than (<)
var a=10
var b=15
console.log(a<b) 

// 4.Greater than or Equal too (>=)
var a=10
var b=15
console.log(a>=b) 

// 5.Less than or Equal too (<=)
var a=10
var b=15
console.log(a<=b)

// 6.Not Equal too (!=)
var a=10
var b=15
console.log(a!=b)

// ------------------------String Operators -------------------------------------------
// +   " concatination"
var a="gayathri"
var b="gowducheruvu"
c=a+b
console.log(c)

// ---------------------Logical Operators----------------------------------------------

// Logical AND(&&)
// Logical OR(||)
// Logical NOT(!)

// Logical AND(&&)
var a=10
var b=20
console.log((a<b)&&(b<a))

// Logical OR(||)
var a=10
var b=20
console.log((a<b)||(b<a))

// Logical NOT(!)
var a=10
var b=20
console.log(!(a<b))