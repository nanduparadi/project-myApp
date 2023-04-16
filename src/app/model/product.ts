export class Product {

    private _mobileBrand: string = "";
    private _model: string = "";
    private _os: string = "";
    private _dop: string = "";
    private _dom: string = "";
    private _dor: string = "";
    private _screenSize: string = "";
    private _CT: string = "";
    private _as: string = "";
    private _ram: string = "";
    private _rom: string = "";
    private _batteryCapacity: string = "";
    private _color: string = "";
    private _itemWeight: string = "";
    private _dateofOrigin: string = "";

   

    get mobileBrand(): string {
        return this._mobileBrand;
    }
    set mobileBrand(value: string) {
        this._mobileBrand = value;
    }
    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }
    get os(): string {
        return this._os;
    }
    set os(value: string){
        this._os = value;
    }
    get dop(): string {
        return this._dop;
    }
    set dop(value: string) {
         this._dop = value;
    }
    get dom(): string {
        return this._dom;
    }
    set dom(value: string){
        this._dom = value;
    }
    get rc(): string {
        return this._dor;
    }
    set rc(value: string){
        this._dor = value;
    }
    get ss(): string {
        return this._screenSize;
    }
    set ss(value: string){
        this._screenSize = value;
    }
    get ct(): string {
        return this._CT;
    }
    set ct(value: string){
        this._CT = value;
    }
    get as(): string {
        return this._as;
    }
    set as(value: string){
        this._as = value;
    }
    get ram(): string {
        return this._ram;
    }
    set ram(value: string){
        this._ram = value;
    }
    get rom(): string {
        return this._rom;
    }
    set rom(value: string){
        this._rom = value;
    }
    get battery(): string {
        return this._batteryCapacity;
    }
    set battery(value: string){
        this._batteryCapacity = value;
    }
    get color(): string {
        return this._color;
    }
    set color(value: string){
        this._color = value;
    }
    get weight(): string {
        return this._itemWeight;
    }
    set weight(value: string){
        this._itemWeight = value;
    }
    get origin(): string {
        return this._dateofOrigin;
    }
    set origin(value: string){
        this._dateofOrigin = value;
    }
}