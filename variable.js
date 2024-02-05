//     --------------------------JAVASCRIPT--------------------------------------------

// javascript is a programming language we use it to give instructions to the computer.
//         input(code)-----> computer -------> output

var a=10
document.write(a," ")

let b=20
document.write(b)

const c=30
document.write(" ",c)
//var----inside and outside of the block we can access and modify the varible values in var keyword


{
    var a=10
    document.write(a)
    console.log(a)
}
console.log(a)
a=20
console.log(a)
document.write(a)

//let-----we can access and modify in inside of the block,in outside we can modify but not access---- 


{
    let b=40
    
    console.log(b)
    b=50
    console.log(b)

}
console.log(b)
b=60
console.log(b)


//const-----in const we cannot modify and access the variable in inside and outside of the Block---- 


{
    const c=70
    console.log(c)
    c=80
    console.log(c)
}


console.log(c)




// --------------------------------------Data Types----------------------------------------
// 1.Primitive Datatypes:
//                     a.Numbers
//                     b.Strings
//                     c.Boolean
// 2.Trivial Datatypes:
//                     a.null
//                     b.undefined
// 3.Non Primitive Datatypes:
//                     a.Array
//                     b.Object
