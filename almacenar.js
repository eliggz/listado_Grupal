let array = []
let btnagregar = document.getElementById("agregar")
let item = document.getElementById("item")
let foo = document.getElementById("foo")
function mostrarListado(){
  array.push(item.value)
    document.getElementById("foo").innerHTML += array[array.length-1] + "<br>"
}
