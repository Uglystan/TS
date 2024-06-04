function generique<Type> (tab : Array<Type>) : Type {
	return tab[0]
}

interface Repository<Type> {
	add(item : Type) : void;
	getAll() : Array<Type>;
}

class stringRepository implements Repository<string> {
	tabString : Array<string> = []

	add (item : string) : void {
		this.tabString.push(item)
	}

	getAll () : Array<string> {
		return this.tabString
	}
}

class numberRepository implements Repository<number> {
	tabNumber : Array<number> = []

	add (item : number) : void {
		this.tabNumber.push(item)
	}

	getAll () : Array<number> {
		return this.tabNumber
	}
}

let tabString : Array<string> = ["Un", "Deux", "Trois"]
let tabNumber : Array<number> = [1, 2, 3]

console.log(generique(tabString))
console.log(generique(tabNumber))

let strRepo : stringRepository = new stringRepository()
strRepo.add("Salut")
console.log(strRepo.getAll())

let numberRepo : numberRepository = new numberRepository()
numberRepo.add(1)
console.log(numberRepo.getAll())