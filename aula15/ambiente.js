let num = [5, 8, 2, 9, 3]

num.sort()//organiza os números em ordem crescente

num.push(7)//acrescenta o número 7 na ultima posição do vetor

num[3] = 6//subistitui o número na posição 3, que é o 9 pelo número 6

num.length//mostra o tamanho do vetor

console.log(`Elementos do vetor ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

//localiza o índice onde o número se encontra
let pos = num.indexOf(9)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}
