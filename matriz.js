/**
 * Obtener numero mayor
 */

function obtenerNumeroMayor(matriz){
    numeroMayor = matriz[0][0]

    for(let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > mayorNumero){
                mayorNumero = matriz[i][j]
            }
        }
    }
    return mayorNumero;
}

const matriz = [
    [2, 7, 12, 1],
    [8, 23], 
    [9, 45, 7],
    [22, 3, 24, 4]
]
const resultado = obtenerNumeroMayor(matriz)
console.log(resultado)

/**
 * Matriz cuadrada
 */

function matrizCuadrada(filas) {
    const filas = filas.length
    
        for (let i = 0; i < filas; i++){
            if(matriz[i].length !== filas){
                return false;
            }   
        }
        return true
    }
    
    const matriz1 = [
        [4, 5],
        [2, 7, 1],
        [8, 10]
    ] // false
    
    const matriz2 = [
        [4, 5, 9],
        [2, 7, 1],
        [8, 10, 5]
    ]
    
    console.log(matrizCuadrada(matriz1))
    console.log(matrizCuadrada(matriz2))

/**
 * Generar grillas
 */

    function generarGrillas(filas, columnas, items){
        const grillas = []

        for (let i = 0; i < filas; i++){
            const fila = []
            for(let j = 0; j < columnas; j++){
                const indiceAleatorio = Math.floor(Math.random() * items.length)
                fila.push(items(indiceAleatorio))
            }
            grillas.push(fila)
        }
        return grillas
    }

    const grilla1 = generarGrillas(2,3, [1,2])
    console.log(grilla1)

const grilla2 = generarGrillas(3,3, ['a','b','c'])
console.log(grilla2)

/**
 * Matriz escalonada
 */

    function matrizEscalonada (filas){
        const matriz  = []

        for(let i = 1; i <= filas; i++){
            const fila = new Array(i).fill(0)
            matriz.push(fila)
        }
        return matriz
    }

    const mat1 = matrizEscalonada(3)
    console.log(mat1)

/**
 * Obtener fila larga
 */

    function obtenerFilaLarga(matriz){
        let filaLarga = matriz[0]

        for (let i = 0; i < matriz.length; i++){
            if(matriz[i].length > filaLarga.length){
                filaLarga = matriz[i]
            }
        }
        return filaLarga
    }

    const matr1 = [[1, 4], [3, 4, 7], [5]]
    const filaLarga1 = obtenerFilaLarga(matr1)
    console.log(filaLarga1)

    const matr2 = [[1, 4], [3, 4, 7, 9], [3, 4, 7, 8], [5]]
    const filaLarga2 = obtenerFilaLarga(matr2)
    console.log(filaLarga2)

/**
 * Obtener cantidad
 */

    function obtenerCantidad (item, items){

    let acum = 0
    
    
        for(let i = 0; i < items.length; i++){
            for(let j = 0; j < items[i].length; j++){
                if(items[i][j] === item){
                    acum = acum + 1
                }
            }     
        }
        return acum
    
    }
    
    console.log(obtenerCantidad(3, [[1, 2, 3], [4, 5, 3]]))


/**
 * Convertir a matriz
 */

    function convertirMatriz(columnas, array){
        const matriz = []

        for (let i = 0; i < array.length; i++){
            const fila = array.slice(i, i + columnas)
            matriz.push(fila)
        }
        return matriz
    }

    console.log(convertirMatriz(2, [1, 2, 3, 4]))