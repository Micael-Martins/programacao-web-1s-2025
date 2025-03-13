let A = [
    [1,2],
    [3,4],
    [5,6]
]

function transporMatriz(A){
    for(let i = 0; i < A[i].length; i++){
        let linha = ""
        for(let j = 0; j < A.length; j++){
            linha += A[j][i] + " "
        }
        console.log(linha)
    }
}

transporMatriz(A)