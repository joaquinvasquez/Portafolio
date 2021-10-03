class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion
        this._valor = valor
    }
    get descripcion(){
        return this._descripcion
    }
    set descripcion(descripcion){
        this._descripcion = descripcion
    }
    get valor(){
        return this._valor
    }
    set valor(valor){
        this._valor = valor
    }
}

class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++Ingreso.contadorIngresos
    }
    get id(){
        return this._id
    }
}

class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++Egreso.contadorEgresos
    }
    get id(){
        return this._id
    }
}

