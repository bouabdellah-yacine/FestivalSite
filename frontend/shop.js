var btnShop = document.querySelectorAll(".btn")
var counter = 0
for(let i=0; i<btnShop.length;i++){
   
    btnShop[i].addEventListener('click', function(){
        counter = counter +1
        document.querySelector(".dora").innerHTML = counter
    })
}