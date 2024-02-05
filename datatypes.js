//------------------------------- Datatypes---------------------------------------
// 1.Primitive Datatypes:
//                     a.Numbers
//                     b.Strings
//                     c.Boolean
//----NumberDataType----
var a=10
console.log(a)
console.log(typeof(a))

var b=10.4
console.log(b)
console.log(typeof(b))

//------- Strings DataTypes --------------------

var a="qwerty"
console.log(a)
console.log(typeof(a))

var b='abcd'
console.log(b)
console.log(typeof(b))

var c="i"
console.log(c)
console.log(typeof(c))


// ----------------Boolean Datatype ---------------------------------

var a=true
console.log(a)
console.log(typeof(a))

var b=false
console.log(b)
console.log(typeof(b))

// ----------------------------------Trivial Datatype ----------------------

// 2.Trivial Datatypes:
//                     a.null
//                     b.undefined

// // --------------Null Datatype --------------------
var a=null
console.log(a)
console.log(typeof(a))

// // --------------Undefined Datatype --------------------
var b
console.log(b)
console.log(typeof(b)) 


//---------------Non Primitive Datatype-----------------------------------------------

//3.Non Primitive Datatypes:
//                     a.Array
//                     b.Object

//----------------Array DataType---------------------

var a=[1,2,3,4,5,6]
console.log(a)
console.log(typeof(a))

// otp:(6) [1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6[[Prototype]]: Array(0)
// object

var b=[1,"tap",true,null]
console.log(b)
console.log(typeof(b))

//(4) [1, 'tap', true, null]0: 11: "tap"2: true3: nulllength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
//datatypes.js:74 object


//----------------Object Datatype-----------------


var details =
{
    FirstName:"Gayathri",
    IdNumber:"R171129"
    
}
console.log(details)
console.log(typeof(details)
)

// opt:{FirstName: 'Gayathri', IdNumber: 'R171129'}
// datatypes.js:90 object