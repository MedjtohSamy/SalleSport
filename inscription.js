const slider = document.querySelector(".slider")
let fleche=document.querySelector(".fleche")
let fleche2=document.querySelector(".fleche2")
let icon=document.querySelectorAll(".icon")
let icon2=document.querySelectorAll(".icon2")
let container=document.querySelector("#container")

fleche.addEventListener("click",()=>
{
    slider.classList.remove("cacher")
    slider.classList.add("vivible")
    fleche.classList.remove("visible2")
    fleche.classList.add("cacher2")
    fleche2.classList.remove("cacher2")
    fleche2.classList.add('visible2')
}
)
    

fleche2.addEventListener("click",()=>
{
    slider.classList.remove("vivible")
    slider.classList.add("cacher")
    fleche.classList.remove("cacher2")
    fleche.classList.add("visible2")
    fleche2.classList.remove('visible2')
    fleche2.classList.add("cacher2")
}

)
    window.addEventListener("load",()=>
    {
        icon.forEach((ic)=>
        {
            ic.classList.add("visible3")

        })
        icon2.forEach((ic)=>
        {
            ic.classList.add("visible4")

        })
        container.classList.add("visible4")
        fleche.classList.add("visible4")


        
    })


