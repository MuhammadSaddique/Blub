
var blub = document.querySelector("#blub");
var btn = document.querySelector("button");


var flage = 0;

btn.addEventListener("click",function(){
    if(flage == 0){
        blub.style.backgroundColor = "Yellow"
        console.log("Clicked");
        flage = 1;
        
    }else{
        blub.style.backgroundColor = "Transparent"
        console.log("Clicked");
        flage = 0;

    }
})