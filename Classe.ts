class Car {

	private _make : string
	private _model : string
	private _year : number

	public constructor(make : string, model : string, year : number) {
		this._make = make
		this._model = model
		this._year = year
	}

	public displayDetails() {
		console.log(`Make : ${this._make}\nModel : ${this._model}\nYear : ${this._year}`)
	}

	public get_model() {
		return this._model
	}

	public set_model(model : string) {
		this._model = model
	}
}

let Ford : Car = new Car("Ford", "Fiesta", 2002)

Ford.displayDetails()
console.log(Ford.get_model())
Ford.set_model("Focus")
console.log(Ford.get_model())