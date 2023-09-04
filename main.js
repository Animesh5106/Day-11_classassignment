const insert = document.getElementById("insert");
window.addEventListener("keydown", function(event){
  
  insert.innerHTML =`
  <div class="key">
  <h1>you pressed</h1>
  ${event.key === " " ? "Space" : event.key} 

  </div>

<div class="key1">
  ${event.keyCode}
 
</div>

  `;
});
