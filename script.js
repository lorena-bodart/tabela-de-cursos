var somaHoras = 0
var somaQuantidade = 0 
var botao = document.getElementById ("botao")

function adicionaCurso (checkbox){
  if (checkbox.checked) {
   somaHoras += parseInt(checkbox.value ) 
   somaQuantidade++    
   document.getElementById ("somaHoras").innerHTML= somaHoras+" h"
   document.getElementById ("somaQuantidade").innerHTML= somaQuantidade+" cursos"
  }
  else {
    somaHoras -= parseInt(checkbox.value ) 
    somaQuantidade--
    document.getElementById ("somaHoras").innerHTML= somaHoras+" h"
    document.getElementById ("somaQuantidade").innerHTML= somaQuantidade+" cursos"
  }
}

botao.onclick= function (){
  if (somaQuantidade == 0) {
    alert ("Nenhum curso selecionado!")
  }
  else{
    alert(
     "Matriculado com sucesso! \n" + 
     "Carga horária total: " + somaHoras + " h \n" + 
     "Quantidade de Cursos: " + somaQuantidade + " cursos."
     )
  }
}