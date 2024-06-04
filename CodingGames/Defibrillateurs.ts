class Defib {
    private location : string
    private lat : number
    private lon : number

    constructor(location : string, lat : number, lon : number) {
        this.lat = lat
        this.lon = lon
        this.location = location
    }

    public dist (lonB : number, latB : number) : number {
        let x : number = (this.lon - lonB) * Math.cos((this.lat + latB) / 2)
        let y : number = (this.lat - latB)
        return (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) * 6371
    }

    public get_location() : string {
        return this.location
    }
}

function latLon(data : string) : string {
    let pass : number = 0
    for (let i : number = data.length - 1; i != 0 ; i--) {
        if (data[i] === ";")
            pass++
        if (pass === 2)
            return data.substring(i + 1, data.length)
    }
    return undefined
}

const LON: number = Number(readline().replace(",", "."));
const LAT: number = Number(readline().replace(",", "."));
const N: number = parseInt(readline());
let defibTab : Array<Defib> = []

for (let i = 0; i < N; i++) {
    const data: string = readline();
    let location : string = data.substring(data.search(/;{1}/g) + 1, data.slice(data.search(/;{1}/g) + 1, data.length).search(/;{1}/g) + data.search(/;{1}/g) + 1)
    let latlon : string = latLon(data)
    let lon : number = Number(latlon.substring(0, latlon.search(/;/g)).replace(",", "."))
    let lat : number = Number(latlon.substring(latlon.search(/;/g) + 1, latlon.length).replace(",", "."))
    let defib : Defib = new Defib(location, lat, lon)
    defibTab.push(defib)
}

let minDist : Defib = defibTab[0]
for (let defib of defibTab) {
    if ( minDist.dist(LON, LAT) >= defib.dist(LON, LAT)) {
        minDist = defib
    }
}

console.log(minDist.get_location());
