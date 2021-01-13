(function(doc){
    
    doc.querySelector(".MenuMobile").addEventListener("click", function (){
        if(doc.querySelector(".menu nav ul").style.display =='flex'){
            doc.querySelector(".menu nav ul").style.display = 'none';
        }else{
            doc.querySelector(".menu nav ul").style.display = 'flex';
        }   
    });

}(document));

        
