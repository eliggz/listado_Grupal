function hacerTodo(){
    let item=document.getElementById("item").value; 
    let items = []
    let cont = 0
    if (item != "") {
        window.localStorage.setItem("item", item.value)
        while (cont++ < item.value) {
        items.push(item.value())}
    }
    else{
        alert("Item inválido")
    }
    }
    

   function recibirItem(){
        return item.value;
    }