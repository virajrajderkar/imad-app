console.log('Loaded!');

var img = document.getElementById('madi');
var marginleft = 0;

function moveRight(){
    if(marginleft < 80){
    marginleft= marginleft+ 5 ;
    img.style.marginLeft = marginleft + 'px';
    }
    
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
}