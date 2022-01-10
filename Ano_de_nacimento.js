function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto') //a mesma coisa que html <img id='foto'>
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')
            }else if (idade <50) {
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //codigo em JavaScript tem um parecido em CSS
        
        res.innerHTML = `Idade Calculada ${idade}`
        res.innerHTML += `, pessoa do sexo ${genero}`
        res.appendChild(img)//appendChild é "abaixo"
            
    }
}
//img.setAttribuite(src(é pra procurar),'foto-xxxx-x.png'(é o nome da foto))
//document.creatElement(cria o elemento 'img', colocando uma nova imagem)