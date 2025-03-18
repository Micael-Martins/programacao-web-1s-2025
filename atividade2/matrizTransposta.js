let A = [
    [1,2],
    [3,4],
    [5,6]
]
function Matriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = ""
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + " "
        }
        console.log(linha)
    }
}
function transporMatriz(A){
    for(let i = 0; i < A[i].length; i++){
        let linha = ""
        for(let j = 0; j < A.length; j++){
            linha += A[j][i] + " "
        }
        console.log(linha)
    }
}
Matriz(A)
console.log("------")
transporMatriz(A)