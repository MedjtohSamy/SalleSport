let images=document.getElementsByClassName("image")
let suivant=document.querySelector(".suivant")
let precedent=document.querySelector(".precedent")
let header=document.querySelector("header")
let back_div=document.querySelector(".back_div")
let menu=document.querySelector(".menu")
let liste=document.querySelector("header nav ul")
let etape=0;
function enlever_active()
{
    for(i=0;i<images.length;i++)
    {

        images[i].classList.remove("active")
    }
}
suivant.addEventListener("click",()=>
{
    etape++
    if(etape>=images.length)
    {
        etape=0;
    }
    
    enlever_active()
    images[etape].classList.add('active')


}
)
precedent.addEventListener("click",()=>
{
    etape--
    if(etape<0)
    {
        etape=images.length;
    }
    
    enlever_active()
    images[etape].classList.add('active')


}
)
setInterval(()=>
{
    {
        etape++
        if(etape>=images.length)
        {
            etape=0;
        }
        
        enlever_active()
        images[etape].classList.add('active')
    
    
    }
},2000
)
addEventListener("scroll",()=>
{
    header.classList.toggle("scroll3",scrollY>=24)
    back_div.classList.toggle("scroll4",scrollY>=600)

})
back_div.addEventListener("click",()=>
{
   scrollY==0

})

/*l'animation de la page*/

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };


  const animate1=function (entries,observer)
  {
    entries.forEach(entry => {
       if  (entry.intersectionRatio>=0.4)
    {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)

    }
    });
  }
  
  
  const observer = new IntersectionObserver(animate1, options);
  observer 
  .observe(document.querySelectorAll(".cacher ,.transiter_plus").forEach((r)=>
    {
        observer.observe(r)
    }
    ))
   



  
  

