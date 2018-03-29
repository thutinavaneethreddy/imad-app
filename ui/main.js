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
    
    //create a new request object
    var request = new XMLHttpRequest();
    
   //make a request
    request.open('GET','http://thutinavaneethreddy.imad.hasura-app.io/counter',true);
    request.send(null);
    
    //capture response from the request and store in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    
     
    
};