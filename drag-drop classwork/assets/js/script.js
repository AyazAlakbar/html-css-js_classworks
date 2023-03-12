let row1=document.getElementById("green1");
let row2=document.getElementById("green2");
let row3=document.getElementById("green3");
let row4=document.getElementById("green4");

let boxes=document.querySelectorAll(".box");


boxes.forEach(b=>{
    b.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text",e.target.id)
    })
})


green1.addEventListener("dragover",function(e){
    e.preventDefault();
})
green1.addEventListener("drop",function(e){
    e.preventDefault();
    let data=e.dataTransfer.getData("text");
    if(data==1||data==2||data==3){
        e.target.appendChild(document.getElementById(data));
    }
})




green2.addEventListener("dragover",function(e){
    e.preventDefault();
})
green2.addEventListener("drop",function(e){
    e.preventDefault();
    let data=e.dataTransfer.getData("text");
    if(data==4||data==5||data==6){
        e.target.appendChild(document.getElementById(data));
    }
})


green3.addEventListener("dragover",function(e){
    e.preventDefault();
})
green3.addEventListener("drop",function(e){
    e.preventDefault();
    let data=e.dataTransfer.getData("text");
    if(data==7||data==8||data==9){
        e.target.appendChild(document.getElementById(data));
    }
})


green4.addEventListener("dragover",function(e){
    e.preventDefault();
})
green4.addEventListener("drop",function(e){
    e.preventDefault();
    let data=e.dataTransfer.getData("text");
    if(data==10||data==11||data==12){
        e.target.appendChild(document.getElementById(data));
    }
})