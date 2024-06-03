interface Person {
	name : string
	age : number
	isStudent : boolean
}

type Status = string | string

type Permission = {
	permissions : Array<string>
}

type Admin = Person & Permission

let user : Person = {
	name : "lucas",
	age : 25,
	isStudent : true
}

let union : Admin = {
	name : "Test",
	age : 25,
	isStudent : true,
	permissions : ['Oui', "Non"]
}

let inter : Status = "test"

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.isStudent)
console.log(inter)
console.log(union)
