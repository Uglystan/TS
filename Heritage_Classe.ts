interface Drivable {
	drive() : void
}

class Cars implements Drivable {
	private _make : string
	private _model : string
	private _year : number

	public constructor(make : string, model : string, year : number) {
		this._make = make
		this._model = model
		this._year = year
	}

	public displayDetails() : void{
		console.log(`Make : ${this._make}\nModel : ${this._model}\nYear : ${this._year}`)
	}

	drive() : void {
		console.log("Drive")
	}

	public get make() : string {
		return this._make
	}

	public get model() : string {
		return this._model
	}

	public get year() : number {
		return this._year
	}

	public set year(year : number) {
		if (year >= 1900 && year <= 2024)
			this._year = year
		else
			throw Error("Bad year < 1900 or > 2024")
	}
}

class ElectricCar extends Cars {
	private _batteryRange : number

	constructor(make : string, model : string, year : number, batteryRange : number) {
		super(make, model, year)
		this._batteryRange = batteryRange
	}

	public displayDetails(): void {
		super.displayDetails()
		console.log(`BatteryRange : ${this._batteryRange}`)
	}
}

let Ford : Cars = new Cars("Ford", "Fiesta", 2005)
let Tesla : ElectricCar = new ElectricCar("Tesla", "S", 2023, 1000)

console.log(Tesla.make)
console.log(Tesla.year)
Tesla.year = 1900
Tesla.displayDetails()
Tesla.drive()
Ford.drive()