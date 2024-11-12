let menu=document.querySelector("header nav .menu")
let ul=document.querySelector("header nav ul")
let header=document.querySelector("header")

menu.addEventListener("click",()=>
{
    ul.classList.toggle("visible")
})
addEventListener("scroll",()=>
{
    header.classList.toggle("scroll1",scrollY>=100)

})