let valor = []
let btnagregar = document.getElementById("agregar")

btnagregar.addEventListener('click', function(){

  valor.push(document.getElementById("item").value)

  localStorage.setItem("array", JSON.stringify(valor))
  valor.innerHTML
 
})




function botonagregar(valor){}



