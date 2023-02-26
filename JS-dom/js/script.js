let plusBtn=document.getElementById("plusBtn");
let minusBtn=document.getElementById("minusBtn");
let multipleBtn=document.getElementById("multipleBtn");
let divideBtn=document.getElementById("divideBtn");
let input1=document.getElementById("textInput1");
let input2=document.getElementById("textInput2");
let input3=document.getElementById("textInput3");


// btn.addEventListener("click",function(){
//     let value=input.value;
//     if (value=="") {
//         alert("can not be empty");
//         return

//     }

//     let li=document.createElement("li");
//     li.classList.add("list-group-item","hover");
//     li.style.cursor="pointer";
//     li.innerText=value.trim();
//     list.appendChild(li);
//     li.onclick=()=>{
//         li.remove();
//     }
//     input.value="";
// })


plusBtn.addEventListener("click",function () {
      input3.value = Number(input1.value) + Number(input2.value);
});
minusBtn.addEventListener("click",function () {
      input3.value = Number(input1.value) - Number(input2.value);
});
multipleBtn.addEventListener("click",function () {
      input3.value = Number(input1.value) * Number(input2.value);
});
divideBtn.addEventListener("click",function () {
      input3.value = Number(input1.value) / Number(input2.value);
});