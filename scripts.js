function selectHour(hour){
    document.querySelectorAll('.formhoras__item').forEach((i)=>{
        i.classList.remove('active')
    })

    document.querySelector(`.formhoras__item[data-h="${hour}"]`).classList.add("active")
    
    setTempo(hour)
    verifyPessoas2h()
}

function setTempo(time){
    document.getElementById("input-tempo").value=time
}

function verifyPessoas2h(){
    if(document.getElementById("input-tempo").value==2){
        document.getElementById("pessoas2hField").style.display="flex"
    }else{
        document.getElementById("pessoas2hField").style.display="none"
    }
}

function calcular(){
    if(!verifyFields()){
        return
    }
    calcularCustos()
}
function calcularCustos(){
    let custo = Number(getValueById('custo'))
    let tempo = Number(getValueById('input-tempo'))
    let pessoas1h = Number(getValueById('pessoas1h'))
    let pessoas2h = 0

    if(tempo==2){

        pessoas2h = Number(getValueById('pessoas2h'))
        document.getElementById('resposta2hW').style.display='block'
    }

    let custoPessoa1h = (custo/(pessoas1h+pessoas2h)) 
    let custoPessoa2h = (custo/(pessoas2h)) + custoPessoa1h

    document.getElementById('resposta1h').innerText=`R$ ${custoPessoa1h.toFixed(2).replace('.',',')}`
    document.getElementById('resposta2h').innerText=`R$ ${custoPessoa2h.toFixed(2).replace('.',',')}`


    document.getElementById('resposta').style.display='block'
}

function getValueById(id){
    return document.getElementById(id).value
}

function verifyFields(){
    let fieldsIds = ['custo','input-tempo', 'pessoas1h']

    if(document.getElementById("input-tempo").value==2){
        fieldsIds.push('pessoas2h')
    }
    let valido = true
    fieldsIds.forEach((f)=>{
        let fieldValue = document.getElementById(f).value
        if(fieldValue=='' || fieldValue==null){
            valido = false
            activeError(f)
        }else{
            hideError(f)
        }
    })

    return valido
}

function activeError(field){
    document.querySelector(`[data-field="${field}"]`).classList.add("error")
}

function hideError(field){
    document.querySelector(`[data-field="${field}"]`).classList.remove("error")
}