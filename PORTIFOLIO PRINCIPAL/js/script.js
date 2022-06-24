
var pags = 'estudo';

function nextArea(){
    var est = document.querySelector('.estudos');
    var pers = document.querySelector('.pers-estudos');

    if (pags=='estudo') {
        pers.style.display='block';
        est.style.display='none';
        // est.style.transition='width 1s linear';
        pags = 'per';
    }
    else{
        pers.style.display='none';
        est.style.display='block';
        pags = 'estudo';
    }
   
}

function linp(){
    document.querySelector("#c1").style.display = "none";
    document.querySelector("#c2").style.display = "none";
    document.querySelector("#c3").style.display = "none";
    document.querySelector("#c4").style.display = "none";
}
function linp2(){
    document.querySelector("#c5").style.display = "none";
    document.querySelector("#c6").style.display = "none";
    document.querySelector("#c7").style.display = "none";
    document.querySelector("#c8").style.display = "none";
}

    
    
    function verif1(){
        linp();
        document.querySelector("#c1").style.display = "block";

    }
    function verif2(){
        linp();
        document.querySelector("#c2").style.display = "block";
    }
    function verif3(){
        linp();
        document.querySelector("#c3").style.display = "block";
    }
    function verif4(){
        linp();
        document.querySelector("#c4").style.display = "block";
    }

    function verif5(){
        linp2();
        document.querySelector("#c5").style.display = "block";

    }
    function verif6(){
        linp2();
        document.querySelector("#c6").style.display = "block";
    }
    function verif7(){
        linp2();
        document.querySelector("#c7").style.display = "block";
    }
    function verif8(){
        linp2();
        document.querySelector("#c8").style.display = "block";
    }

    function scrollTopAnimated() {
            window.scrollTo(0, 0);
            
      
    } 