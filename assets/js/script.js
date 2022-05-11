// let dragElement= document.querySelector(".item");
// let area= document.querySelector(".area")
// function allowDrop(e) {
//     e.preventDefault();
//   }
  
//   function drag(e) {
//     e.dataTransfer.setData("text", e.target.id);
//   }
  
//   function drop(e) {
//     e.preventDefault();
//     let data = e.dataTransfer.getData("text");
//     e.target.appendChild(document.getElementById(data));
//   }

  let allDiv=document.querySelectorAll(".div1");
  let div=document.querySelector(".div2");
  allDiv.forEach(div1=>{
      div1.ondragstart=function(e){
          e.dataTransfer.setData("id",this.id)
      }
  })
div2.ondragover=function(e){
    e.preventDefault();
}
div2.ondrop=function(e){
   
    let div=document.getElementById(id)
    div2.appendChild(div)
}
div.forEach(div2=>{
    div2.ondrop=function(e){
        e.dataTransfer.getData("id",this.id)
    }
})
