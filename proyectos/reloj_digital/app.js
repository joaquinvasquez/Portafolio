// console.log('Hola Mundo')
const meses = new Array('Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
const dias = new Array('Dom', 'Lun','Mar', 'Mier', 'Jue', 'Vie', 'Sab')
let h1 = document.getElementById('reloj')
let h3 = document.getElementById('dia')

function mostrarReloj(){
    let fecha = new Date()
    let hr = formatoNum(fecha.getHours())
    let min = formatoNum(fecha.getMinutes())
    let seg = formatoNum(fecha.getSeconds())
    let date = formatoNum(fecha.getDate())
    let dia = dias[fecha.getDay()]
    let mes = meses[fecha.getMonth()]
    let anio = fecha.getFullYear()
    
    h1.innerHTML = `${hr} : ${min} : ${seg}`
    h3.innerHTML = `${dia}, ${date} de ${mes}, ${anio}`

    document.getElementById('cont').classList.toggle('animar')
}
const formatoNum = num =>{
    if(num < 10)
        num = '0' + num
    return num
}
setInterval(mostrarReloj, 1000)

