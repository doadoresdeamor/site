// Loading
var i = setInterval(function () {
    clearInterval(i);

    // The desired code is only this:
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
   
}, 3000);


// =========================== 

/**
 *  Como Implentar a Loading?
 * 
 *  Nova div para o conteúdo da Página com id e style abaixos:
 * 
 * 
 *  Incluir uma div dentro do body assim:
 * 
 * 
 */