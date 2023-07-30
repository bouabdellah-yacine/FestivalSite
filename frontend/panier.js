var delBTn = document.querySelectorAll(".buy")
for(let i = 0 ; i<delBTn.length;i++){
    delBTn[i].addEventListener('click',function(){
        delBTn[i].parentElement.parentElement.parentElement.parentElement.remove()
    })
}