let str : string = "Hello, TypeScript!"
let nbr : number = 100
let bool : boolean = true

let tab : Array<number> = [1, 2, 3]
let coord : [number, number]
type IDCard = [string, number, boolean]

console.log(str)
console.log(nbr)
console.log(bool)
console.log(tab)

coord = [10, 20]
console.log(coord)

let IDCard1 : IDCard = ['Lucas', 25, false]
console.log(IDCard1)
