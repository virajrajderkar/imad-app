console.log('Loaded!');

var img = document.getElemantById('madi');


function moveRight(){
    
    var marginleft= marginleft+ 5 ;
    img.style.marginLeft = marginleft + 'px';

    
}
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
}