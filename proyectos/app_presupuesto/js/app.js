// console.log('Hola Mundo')

const ingresos = [
    new Ingreso('Sueldo', 60000),
    new Ingreso('Venta bicicleta', 30000),
]
const egresos = [
    new Egreso('Farmacia',1000),
    new Egreso('Mercado',6000),
]

function cargarApp(){
    cargarCabecero()
    cargarIngresos()
    cargarEgresos()
}

function totalIngresos(){
    let total=0
    for(let i of ingresos){
        total+=i.valor
    }
    return total
}

function totalEgresos(){
    let total=0
    for(let i of egresos){
        total+=i.valor
    }
    return total
}

function cargarCabecero(){
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = totalEgresos()/totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos())
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos())
}


function formatoMoneda(valor){
    return valor.toLocaleString('es-AR', {style:'currency', currency:'ARS', minimumFractionDigits:2})
}

function formatoPorcentaje(valor){
    return valor.toLocaleString('es-AR', {style:'percent', minimumFractionDigits:2})
}

function cargarIngresos(){
    let ingresosHTML = ''
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}

function crearIngresoHTML(ingreso){
    let elemento = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <i class="fas fa-trash" onclick="eliminarIngreso(${ingreso.id})"></i>
                </button>
            </div>
        </div>
    </div>`
    return elemento
}

function eliminarIngreso(id){
    ingresos.splice(ingresos.findIndex(ingreso => ingreso.id === id), 1)
    cargarApp()
}


function cargarEgresos(){
    let egresosHTML = ''
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML
}

function crearEgresoHTML(egreso){
    let elemento = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <i class="fas fa-trash" onclick="eliminarEgreso(${egreso.id})"></i>
                </button>
            </div>
        </div>
    </div>`
    return elemento
}

function eliminarEgreso(id){
    egresos.splice(egresos.findIndex(egreso => egreso.id === id), 1)
    cargarApp()
}

document.getElementById('btn-agregar').addEventListener('click', function(){
    let descripcion = document.getElementById('nuevo_descripcion')
    let valor = document.getElementById('nuevo_valor')
    let selector = document.getElementById('selector')

    if(descripcion.value !== '' && valor.value !== ''){
        if(selector.value == 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value))
        }
        else{
            egresos.push(new Egreso(descripcion.value, +valor.value))
        }
        cargarApp()
    }
})


let select = document.getElementById('selector')
    select.addEventListener('click', function(){
        let btn = document.getElementById('btn-agregar')
        if(select.value === 'egreso'){
            if(btn.classList.contains('verde')){
                btn.classList.replace('verde', 'colorado')
            }else if(btn.classList.contains('colorado')){
            }else{
                btn.classList.add('verde')
            }
        }
        if(select.value === 'ingreso'){
            if(btn.classList.contains('colorado')){
                btn.classList.replace('colorado', 'verde')
            }
        }else if(btn.classList.contains('verde')){
        }else{
            btn.classList.add('colorado')
        }
})