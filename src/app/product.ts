export class Product {
  private _id:number;
  private _name:String;
  private _price:number;

  constructor(id: number, name: String, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
