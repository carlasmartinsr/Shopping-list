const nameItem= document.getElementById("name-item")
const btnItem= document.getElementById("btn-add")
let listItems= document.getElementById("list-items")
let arrItems=[]



function displayItems(){
  listItems.innerHTML="" 
  if(arrItems.length>0){
   for(let i=0; i<= arrItems.length-1; i++){
     listItems.innerHTML+=`<li ><label ><input type="checkbox" />${arrItems[i]}</label><button id="btn-delete"  class="btn-delete" data-id=${i}  ><img src="./img/delete.png" class="img-btn" } /></button></li>`
   }
  }
}

window.addEventListener("load",function(){
  const listData=JSON.parse(localStorage.getItem("list")) 
  arrItems=[...listData].slice()
  displayItems()
})

window.addEventListener("click",function(e){

  if(e.target.closest("button").id==="btn-delete"){
   const idItem =Number(e.target.closest("button").dataset.id)
   arrItems.splice(idItem,1)
   localStorage.setItem("list",JSON.stringify(arrItems))
   displayItems()
  }
  else if(e.target.closest("button").id==="btn-add" && nameItem.value!==""){
   arrItems.push(nameItem.value)
   localStorage.setItem("list",JSON.stringify(arrItems))
   nameItem.value=""
   displayItems()
  }
})
