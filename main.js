
 
   document.addEventListener('DOMContentLoaded', function() {
       
    var myCollection = document.getElementsByTagName("progress");
    var i;
    for (i = 1; i < 13; i++) {
        let y="file"+i;
        if(document.getElementById(y).value <= 40)
        {
            var x=document.getElementById(y).value;
            document.getElementById(y).style.backgroundColor="orange";
            document.getElementById(y).style.width=x+"px";
          
    
        }
        if(document.getElementById(y).value >= 40)
        {
            var x=document.getElementById(y).value;
            document.getElementById(y).style.backgroundColor="green";
            document.getElementById(y).style.width=x+"px";
    
    
    
    
            }
            console.log(y);
        
   }
 }, false);