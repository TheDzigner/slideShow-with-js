const nextSlideBtn = document.getElementById("nextSlideBtn")
const prevSlideBtn = document.getElementById("prevSlideBtn")

const images = Array.from(document.querySelectorAll(".images .image"))

const paginations = document.querySelector(".paginations")
let index = 0





   function createBtns()
   {
    for (let i = 0; i < images.length; i++) {
       const button = document.createElement("button")
       button.setAttribute("data-key",images[i].dataset.key)
       paginations.appendChild(button)
     }
   }
   createBtns()

   const pageBtns = document.querySelectorAll(".paginations button")
   let activeIndex = 0

   pageBtns.forEach((btn,index)=>{
    btn.addEventListener('click',function(e){
        const key = e.target.dataset.key
        pageBtns[activeIndex].classList.remove("active")
        activeIndex = index
        pageBtns[activeIndex].classList.add("active")
          for (let i = 0; i < images.length; i++) {
            const imgKey = images[i].dataset.key
            
            if (key === imgKey) {
                images[i].classList.add("active")
            } else {
                images[i].classList.remove("active")
            }

          }


    })
   })


   nextSlideBtn.addEventListener("click",()=>{
  
    images[index].classList.remove("active")
    // if (pageBtns.classList.contains("active")) {
        
    // } else {
        
    // }
  

    if (index < images.length -1) {
      index++
      }
 
    images[index].classList.add("active")
    pageBtns[index].classList.add("active")
    })
 
 prevSlideBtn.addEventListener("click",()=>{
     images[index].classList.remove("active")
     pageBtns[index].classList.remove("active")
    if (index <= 0) {
        
     }else{
     index--
     }
     images[index].classList.add("active")
     pageBtns[index].classList.add("active")
    })