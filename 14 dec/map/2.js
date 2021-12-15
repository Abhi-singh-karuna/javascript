// 1. new Map()

const x = new Map ([
    ["a",10],
    ["b", 20],
    [ "c", 30]
])

console.log(x)
console.log(typeof(x))


console.log(/ ----------------------------------------------------- /)


// 2. set() method

// create a map
const y = new Map();
y.set("peter", "natasa" )
y.set("john", "wick")

console.log(y)
console.log(typeof(y))

y.set("maya","natasa")

console.log(y)

console.log(/ ----------------------------------------------------- /)


console.log(y.get("peter"))

console.log(/ ----------------------------------------------------- /)

console.log(y.size)

y.delete("maya")

console.log(/ ----------------------------------------------------- /)


console.log(y)

console.log(y.size)

console.log(/ ----------------------------------------------------- /)


//The has() method returns true if a key exists in a Map:

console.log(y.has("john"))

console.log(/ ----------------------------------------------------- /)


// The forEach() method calls a function for each key/value pair in a Map:

let text = "" ;
y.forEach(function(value , key) {
    text += key + " = " + value;
})

console.log(text)
