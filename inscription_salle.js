let container=document.querySelector("#container")
let container2=document.querySelector(".container2")
let icon2=document.querySelectorAll(".icon2")
let icon=document.querySelectorAll(".icon")
let button2=document.querySelector(".payer")

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
        container2.classList.add("visible4")



        
    })


    button2.addEventListener("click",()=>
    {
        container2.classList.add("visible2")

    })

