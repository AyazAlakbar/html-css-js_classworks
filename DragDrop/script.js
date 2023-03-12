document.querySelectorAll(".box").forEach(div=>{
    div.ondragover=function(e){
        e.preventDefault();
    }

    div.ondrop=function(e){
        this.append(document.getElementById("img"))
    }
})



