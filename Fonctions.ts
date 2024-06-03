function add(a : number, b : number): number {
	return (a + b)
}

function len(str : string): number {
	return (str.length)
}

(tab : Array<number>): number => {
	if (tab.length === 0)
		throw Error("Empty array")
	
	let copieTab : Array<number> = [...tab]
	copieTab.sort((a : number, b :number): number => {return a - b})
	console.log(copieTab)
	return (copieTab[copieTab.length - 1])
}

(tab : Array<number>) : number => {
	if (tab.length === 0)
		throw Error("Empty array")

	let max = tab[0]

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] > max)
			max = tab[i]
	}
	return max
}

(tab : Array<number>): number => {
	if (tab.length === 0)
		throw Error("Empty array")
	return Math.max(...tab);
}

console.log(add(21, 21))
console.log(len("42"))
console.log(big([-1, -123, -1, -14325, -12, -3456, -12312, -345]))