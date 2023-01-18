function verificar() {
    var data = new Date() //a variável (data) recebe a data atual 
    var ano = data.getFullYear() //a variável (ano) recebe o ano atual
    var fano = document.getElementById('txtano') //a variável (fano) recebe a string digitada na cx. de entrada ano de nascimento
    var res = document.querySelector('div#res')
    // por padrão tudo que é digitado é uma string, Number faz a conversão para inteiro
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //a variável (fsex) recebe o sexo escolhido, masculino ou feminino
        var idade = ano - Number(fano.value)//a variável (idade) recebe a diferença do ano atual - ano digitado
        var grupo = ''  //a variável (grupo) recebe uma strig vazia
        var img = document.createElement('img')  //a variável (img) recebe o elemento img
        img.setAttribute('id', 'foto')  // img recebe o id="foto"
        if (fsex[0].checked) {
            // grupo = 'Homem'
            if (idade >= 0 && idade < 10) {
                grupo = 'criança'
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                grupo = 'jovem'
                img.setAttribute('src', 'rapaz.png')
            } else if (idade < 50) {
                grupo = 'homem'
                img.setAttribute('src', 'adulto.png')
            } else {
                grupo = 'idoso'
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            //grupo = 'Mulher'
            if (idade >= 0 && idade < 10) {
                grupo = 'criança'
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                grupo = 'jovem'
                img.setAttribute('src', 'moça.png')
            } else if (idade < 50) {
                grupo = 'mulher'
                img.setAttribute('src', 'adulta.png')
            } else {
                grupo = 'idosa'
                img.setAttribute('src', 'idosa.png')
            }
        }
        //res.style.textAlign = 'center' (fica melhor no css)
        res.innerHTML = `Detectamos ${grupo} com ${idade} anos.`
        res.appendChild(img)
    }
}