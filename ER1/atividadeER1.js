let listaDePecas = []

listaDePecas.push('Disco de Freio')
listaDePecas.push('Amortecedor')
listaDePecas.push('Motor')

//listaDePecas[2] = 'Pastilha' alterar item da lista pelo indice 

if (listaDePecas.length < 10){
    console.log('É possivel cadastrar mais peças!')
}
else{
    console.log('Não há mais espaço na caixa')
}

let peso = 150

if (peso < 100 ){
    console.log ('A peça deve pesar no minimo 100 g')
}
else{
    console.log ('A peça possui um peso inadequado')
}

let nomePeca = 'Disco de freio'
if (nomePeca.length > 3 ){
    console.log ('O nome da peça esta adequado para o cadastro')
}
else if (nomePeca.length == 0){
    console.log ('O nome da peça nao pode ser vazio')
}
else {
    console.log ('O nome da peça deve ter no minimo 3 caracteres, digite o nome adequado')
}
