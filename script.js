 var character = 
 document.getElementById("charcter");
 var block = document.getElementById("block"); 
 function jump()
 {
     if(character.classList != "animate")
     {
          character.classList.add("animate");
     }
    
     setTimeout(function(){
         character.classList.remove("animate");
     },500);

 }

 var checkDead = setInterval(function(){
     var characterTop = 
     parseInt(window.getComputedStyle(character).getPropertyValue("top"));
 },10);