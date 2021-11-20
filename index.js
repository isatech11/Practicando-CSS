const box = document.querySelector(".dos")
const principal= document.getElementById("principal")


box.addEventListener("click",function(){
    box.classList.add('isabelita')
    console.log("me ejecute")
})

// window.addEventListener("scroll",function(){
//     principal.classList.add("principal")
//     console.log("me desarrollé")
// })

const descubre = document.querySelector(".descubre")
descubre.addEventListener("click", function(){

        descubre.innerHTML= "Hecha un vitazo"
})