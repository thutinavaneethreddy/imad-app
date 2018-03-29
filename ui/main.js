var element = document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft +=5;
    img.style.marginLeft = marginLeft + 'px';
}
element.onclick = function(){
    var interval = setInterval(moveRight,50);
}