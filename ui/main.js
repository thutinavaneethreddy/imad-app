//move the image
var element = document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft +=5;
    img.style.marginLeft = marginLeft + 'px';
}
element.onclick = function(){
    var interval = setInterval(moveRight,50);
};

//increase the counter on button click
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



//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the name
    var request = new XMLHttpRequest();
    request.open('GET','http://thutinavaneethreddy.imad.hasura-app.io/submit-name?name='+name);
    request.send(null);
    
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status==200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                list+='<li>' + names[i]+ '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
};