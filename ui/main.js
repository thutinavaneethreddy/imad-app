console.log('Loaded!');

var element = getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft +=5;
    img.style.marginLeft = marginLeft;
}
element.onclick = function(){
    var interval = setInterval(moveRight,50);
}