// screen loading function..
window.onload = function() {
        
    setTimeout(function() {
        document.querySelector('.wait').style.display = 'none';
    }, 20000); 

}; 
window.addEventListener("click",play);
function play(){ document.getElementById("peace").play();
}