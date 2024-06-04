function diff(elem : number, index : number, array : Array<number>) : number {
    if (index === array.length - 1) {
        return elem
    }
    else {
        return array[index + 1] - elem
    }
}

const N: number = parseInt(readline());
let piTab : number[] = []
for (let i = 0; i < N; i++) {
    let pi: number = parseInt(readline());
    piTab.push(pi)
}

piTab.sort((a : number, b : number): number => {return a -b})
let piDiffTab : Array<number> = piTab.map(diff)

console.log(Math.min(...piDiffTab))
