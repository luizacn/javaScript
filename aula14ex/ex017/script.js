function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        tab.innerHTML = '' //limpar tabuada

        for (let c = 1; c <= 10; c++) {

            //criei um option de forma dinâmica
            let item = document.createElement('option')
            //inserir texto dentro do select
            item.text = `${n} x ${c} = ${n * c}`
            //identifica o item selecionado a ser enviado para o formulário
            item.value = `tab${c}`
            // exibir na tela
            tab.appendChild(item)
        }
    }

}