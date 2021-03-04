const number = document.getElementById('number')
const ad = document.getElementById('add')
const run = document.getElementById('run')
const answer = document.getElementById('answer')
let list = document.getElementById('list') 
let numberList = []


function isNumber (num) {
  if (Number(num) >= 0 && Number(num) <= 100) {
    return true
  } else {
    return false
  }
}

function inList (num, list) {
  if(list.indexOf(Number(num)) != -1){
    return true
  } else {
    return false
  }
}

function add () {
  let numb = Number(number.value)
  if (isNumber(numb) && !inList(numb, numberList)){
    let numb = Number(number.value)
    let item = document.createElement('option')
    item.text = `valor ${numb} adicionado.`
    list.appendChild(item)
    numberList.push(numb)
    console.log(numberList)
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }
}

function analise(){
  bigger = 0
  smaller = 0
  sum = 0
  average = 0

  for (var i = 0; i < numberList.length; i++) {
    if (i == 0) {
      bigger = numberList[i]
      smaller = numberList[i]
    } else if (bigger < numberList[i]) {
      bigger = numberList[i]
    } else {
      smaller = numberList[i]
    }
    sum += numberList[i]  
  }
  answer.innerHTML += `Ao todo, temos ${numberList.length} números cadastrados. `
  answer.innerHTML += `<br><br>O maior valor informado foi o ${bigger}`
  answer.innerHTML += `<br><br>O menor valor informado foi o ${smaller}`
  answer.innerHTML += `<br><br>Somando todos os valores, temos ${sum}`
  answer.innerHTML += `<br><br>A média dos valores digitados é ${sum / numberList.length}`
}

ad.addEventListener('click', add)
run.addEventListener('click',analise)