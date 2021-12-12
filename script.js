function CalculatorAge(){ 
  var dateCurrent = new Date();
  var yearCurrent = dateCurrent.getFullYear();
  let birth = Date.parse(document.getElementById('dateBorn').value);
 // var yearBornParts = birth.split("/");
 //var yearBornParts = ["01 ", " 01 ", " 2020"]
  var dayBorn =birth.substring(0, 2);
  var monthBorn =birth.substring(3, 5);
  var yearBorn =birth.substring(6, 8);
  var age = yearCurrent - yearBorn;
  var monthCurrent = dateCurrent.getMonth() + 1; 

  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
  if(monthCurrent < monthBorn){
  age--; 
  } else {
  //Se estiver no mes do nascimento, verificar o dia
  if(monthCurrent == monthBorn){ 
  if(new Date().getDate() < dayBorn ){ 
  //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
  age--; 
  }
  }
  } 

 if(isNaN(age)){
  alert('Informe uma data válida!');
}else{
  let view = document.getElementById('labelAge');
  let paragrafo = document.getElementById('paragrafo');
  paragrafo.innerText = '';
  view.innerHTML  = `Sua idade é: ${age}\n`;  
};
}