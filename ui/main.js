var element = document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft +=5;
    img.style.marginLeft = marginLeft + 'px';
}
element.onclick = function(){
    var interval = setInterval(moveRight,50);
};

var button = document.getElementById('counter');
button.onclick = function(){
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};