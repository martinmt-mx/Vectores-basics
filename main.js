
function llenar(vector, tamano){
    let numeroPar = 2
    for (let i = 0; i<tamano; i++){
        vector[i] = numeroPar
        numeroPar+=2
    }
}

function mostrar(vector){
    console.log(vector)
}

function girarDerecha(vector){
    let tamanoVector = vector.length-1
    let ultimoNum = vector[tamanoVector]
    for (let i = tamanoVector; i>=0; i--){
        let siguienteNum = vector[i-1]
        vector[i] = siguienteNum
    }
    vector[0] = ultimoNum
}

function girarIzquierda(vector){
    let tamanoVector = vector.length
    let ultimoNum = vector[0]
    for (let i = 0; i<tamanoVector; i++){
        let siguienteNum = vector[i+1]
        vector[i] = siguienteNum
    }
    vector[vector.length-1] = ultimoNum
}

function invertir(vector){
    let tamanoVector = vector.length-1
    let iteraciones = Math.round(tamanoVector/2)
    let numIzq = vector[0]
    let numDer = vector[tamanoVector]
    for (let i = 0; i<iteraciones; i++){
        vector[i] = numDer
        vector[tamanoVector] = numIzq
        tamanoVector-=1
        numIzq = vector[i+1]
        numDer = vector[tamanoVector]
    }
}

let vector = []
llenar(vector, 9)
mostrar(vector)
girarIzquierda(vector)
mostrar(vector)
girarDerecha(vector)
mostrar(vector)
invertir(vector)
mostrar(vector)