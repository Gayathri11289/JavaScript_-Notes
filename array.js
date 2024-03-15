// ------------------ARRAY----------------
// Creation of an array in different methods
// var ar=[1,2,3,4,5]
// console.log(ar)

// var ar1=[]
// ar1[0]=1
// ar1[1]=2
// ar1[2]=3
// ar1[3]=4
// ar1[4]=5
// console.log(ar1)

// var ar2=new Array(11,12,13,14,15)
// console.log(ar2)

//Adding elements to array
var ar=[1,2,3,4,5]
console.log(ar)
//adding element in last
ar.push(6)
console.log(ar)
//adding element in first
ar.unshift(0)
console.log(ar)
//replacing element in an array
ar[3]=9
console.log(ar)
//removing last element in an array
ar.pop()
console.log(ar)
//removing first element in an array
ar.shift()
console.log(ar)
//remove a particular elemeny in ab array----it shows empty in that place
delete ar[2]
console.log(ar)
//removing the elements in an array from a particular index(2,1)from index 2 to one element
ar.splice(2,1)
ar.push(1)
ar.unshift(6)
console.log(ar)
//slicing an array
ar1=ar.slice(1,3)
console.log(ar1)
// sorting an array
ar.sort()
console.log(ar)
//reversing an array
ar.reverse()
console.log(ar)