//find all elements tagged "red"
var apliques = document.querySelectorAll('.apliques');

//find all elements tagged "blue"
var estampadas = document.querySelectorAll('.estampadas');

//find all elements with "item" class
var alls = document.querySelectorAll('.item');

//function to initially loop through all items and hide them
function hide_init(){
   for (var i = 0; i < alls.length; ++i) { 
 alls[i].style.display = 'none'; 
}
}

function show_apliques(){  
//call the inital hide function
hide_init();
//loop through red-tagged items and show them  
   for (var i = 0; i < apliques.length; ++i) { 
 apliques[i].style.display = 'inline-block'; 
} 
}

function show_estampadas(){  
//call the inital hide function
hide_init();
//loop through blue-tagged items and show them  
   for (var i = 0; i < estampadas.length; ++i) { 
 estampadas[i].style.display = 'inline-block'; 
} 
}

function show_all(){  
  //loop through all items and show them
   for (var i = 0; i < alls.length; ++i) { 
 alls[i].style.display = 'inline-block'; 
} 
}