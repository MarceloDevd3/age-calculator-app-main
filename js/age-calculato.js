

const atualDate = new Date()


const btnSubmit = document.querySelector('form')

//submit form

// preciso de ajudar para concertar a parte dos mese se poder me ajudar eu agradeceria muito

btnSubmit.addEventListener('submit', function(e) {

e.preventDefault();

const myBirthDay = document.getElementById('day').value
const myMonthDay = document.getElementById('month').value
const myYearsDay = document.getElementById('years').value

// essa parte resolve a idade de uma pessoa que ja fez aniversario e de quem vai fazer 

let birthMonth =  myMonthDay;
let atualMonth = atualDate.getMonth()
let idade = atualDate.getFullYear();
let anodeNascimento = myYearsDay
let dataDoNascimento = myBirthDay ;

console.log(7 > 5)

if(atualMonth > birthMonth) {
  idade--
  let result = idade - anodeNascimento
  let yearsTxt = document.getElementById('yearsNum').innerText = result;
}else {
  let result = idade - anodeNascimento
  let yearsTxt = document.getElementById('yearsNum').innerText = result;
}

// meses de idade  erro em calcular mese de vida em certas idades 

if(birthMonth > atualMonth) {
  let monthsTxt = document.getElementById('monthsNum').innerHTML = atualMonth;
} else {
  let resultOfMonths =  atualMonth  - birthMonth
  let monthsTxt = document.getElementById('monthsNum').innerHTML = resultOfMonths;
}

// calcular dias de vida ate agora 

function dayInAMonthOfLife(ano, mes) {
  const day = new Date(ano, mes,0);
  const daysInAMonth =  day.getDate() - dataDoNascimento + atualDate.getDate() 
  let daysOfLife =  document.getElementById('dayNum').innerText = daysInAMonth;  
}


console.log(dayInAMonthOfLife(myYearsDay, myMonthDay))

});



