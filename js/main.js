const buttonNextPage = document.querySelector('.continuar')
const content = document.querySelector('.left-side')
const respostas = {}

buttonNextPage.addEventListener('click', ()=> {
 
   var elementosDeFormulario = document.querySelectorAll('.container select, .container input');
 
   elementosDeFormulario.forEach(function(elemento) {
     if (elemento.tagName === 'SELECT' || (elemento.tagName === 'INPUT' && elemento.type !== 'checkbox')) {
       respostas[elemento.id] = elemento.value;
     }
   });
   
   console.log(respostas);
   console.log(respostas)   
   start()
   
})

function start(){
   content.innerHTML = objToHtml(respostas)
   console.log(respostas)
}

function objToHtml(obj) {
   let string = ""
   for(let i = 0; i < obj.length; i++){
      string += `<p>${obj[i]}</p>`
   }
   console.log(string)
   return string
}


