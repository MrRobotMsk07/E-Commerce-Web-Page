let missedProdact = new Array();
let cardState = false;
let card = document.querySelector(".card")

let sideMenu = document.querySelector(".side-menu"); 
let sideContent = document.querySelector(".side-menu .content")
let showSideMenuToggle = document.querySelector(".toggle");
let closeSide = document.querySelector(".close")
let root = document.documentElement
showSideMenuToggle.addEventListener("click" , (e) => {
    sideMenu.classList.toggle("show-side-menu");
    sideContent.classList.toggle("show-content");
})
closeSide.addEventListener("click" , (e) => {
   
    sideMenu.classList.toggle("show-side-menu");
    sideContent.classList.toggle("show-content");
})


let userImage = document.querySelector(".card img:first-child"); 
let contentCard = document.querySelector(".card-content");
userImage.addEventListener("click" , (e) => {
    missedProdact = new Array()

    console.log(missedProdact)
    if(contentCard.classList.contains("show-card")) {
        contentCard.classList.remove("show-card")
        cardState = false
       


    }
    else {
        contentCard.classList.add("show-card")
        cardState = true
        root.style.setProperty("--hide-missed" , "hidden")
        root.style.setProperty("--transform-missed" , "scale(0)")

    }

})


let myProdactImages = document.querySelectorAll(".prodact-images img"); 
let currentImage = document.querySelector(".parent");
let imagesWidth = { 0 :currentImage.clientWidth * 0 ,  1 :currentImage.clientWidth* 1 , 2 :currentImage.clientWidth * 2 , 3 : currentImage.clientWidth * 3 }
let currentPlace = 0;
let overlays = document.querySelectorAll(".overlay");
myProdactImages[0].parentNode.querySelector(".overlay").classList.add("show-overlay")
myProdactImages.forEach((img) => {
    img.addEventListener("click" , (e) => {
   
        for(let i = 0 ; i < 4 ; i++) {
            

           if(imagesWidth[i] === imagesWidth[Number(e.target.getAttribute("data-temp"))]) {
         
               if(i > currentPlace) {
                   console.log(currentPlace , i)
                let q = imagesWidth[i]; 
               console.log(q)
                currentImage.style.transform = `translateX(-${q}px)`
                overlays[currentPlace].classList.remove("show-overlay")
                currentPlace = i
        let mobImg = document.querySelector(".im");
        let tempSrc = mobImg.getAttribute("src");
        let newMobSrc = tempSrc.replace(tempSrc[tempSrc.indexOf(".") - 1] , currentPlace + 1)
        mobImg.setAttribute("src" , newMobSrc)
              
                overlays[i].classList.add("show-overlay")
                
               }
               if(currentPlace > [i]) {
             

                let q = imagesWidth[i]; 
          

                currentImage.style.transform = `translateX(-${q}px)`
                overlays[currentPlace].classList.remove("show-overlay")
                currentPlace = i
                let mobImg = document.querySelector(".im");
                let tempSrc = mobImg.getAttribute("src");
                let newMobSrc = tempSrc.replace(tempSrc[tempSrc.indexOf(".") - 1] , currentPlace + 1)
                mobImg.setAttribute("src" , newMobSrc)
              
             
                overlays[i].classList.add("show-overlay")
              

               }
           }
        }  
          
    })
})


let plusMin = document.querySelectorAll(".select img") 
let countP = document.querySelector(".count")
plusMin.forEach((ele) => {
    ele.addEventListener("click" , (e)=> {
        if(e.target.className == "plus") {
          
            countP.textContent = Number(countP.textContent) + 1;
        }
        else {
            if(countP.textContent !="0") {
            countP.textContent = Number(countP.textContent) - 1;
            }
        }
    })
})


let prodBox = document.querySelector(".prod");
let addBtn = document.querySelector(".add-to-cart"); 
let mainProd = document.querySelector(".main-content")
let cardContent = document.querySelector(".card-content")
let cheacBtn = document.querySelector(".card-content .button")
let numOfProd = 1;
let prod = document.querySelector(".prod");
let emptyCart = `<p class = empty>Your Cart is empty </p>`
mainProd.innerHTML = emptyCart
addBtn.addEventListener("click" , (e) => {
    
    let newProd = prod.cloneNode(true);
    let newImage = myProdactImages[currentPlace];
    let newSrc = newImage.getAttribute("src");
    let final = Number(countP.textContent) * 99990.00;
 
    if(final != 0) {
        if(!cardState) {
            missedProdact.push("a")
            card.setAttribute("data-num" , missedProdact.length)
            root.style.setProperty("--hide-missed" , "blue");
            root.style.setProperty("--transform-missed" , "scale(1)");
    
        }
        newProd.style.display = "flex"
        mainProd.querySelector(".empty").style.display = "none"
    newProd.innerHTML = ` 
    <img src="${newSrc}" alt="selected prodact">
    <div class="text">
    <p>
    Lenovo Legion 5
    </p>
    <div class="quantity">
      <span class="first">₹99,990.00 x ${countP.textContent}</span>
      <span class="final">₹${final}</span>
    </div>
    </div>
    <img class="delete" src="images/delete.svg" alt="delete">`
    mainProd.appendChild(newProd)
    cheacBtn.classList.remove("hide-button")
    mainProd.classList.remove("clear")
    numOfProd++;
    newProd.querySelector(".delete").addEventListener("click" , (e) => {

        numOfProd--;
        console.log(numOfProd)    
        if(numOfProd === 1) {
           
            cheacBtn.classList.add("hide-button")
            mainProd.classList.add("clear")
            mainProd.innerHTML = `<p class = "empty">Your Cart Is Empty</p>`
        }
        else{
           
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        }
       
    })
    }
    else{   
  
    }
})
let deleteBtn = document.querySelector(".delete"); 

let pre = document.querySelector(".pre")
let nextI = document.querySelector(".next");
pre.addEventListener("click" , (e) => {

        let image = document.querySelector(".im"); 
        let src = image.getAttribute("src");
        if(src[src.indexOf(".") - 1] != "1") {
            let newSrc = src.replace(src[src.indexOf(".") - 1] ,Number(src[src.indexOf(".") - 1 ]) - 1)
            image.setAttribute("src" , `${newSrc}`)
            let tempQ =(Number(src[src.indexOf(".") - 1]) - 2 ) * 450 ;
           
            currentImage.style.transform = `translateX(-${tempQ}px)`
        }
    
})
nextI.addEventListener("click" , (e) => {

    let image = document.querySelector(".im"); 
    let src = image.getAttribute("src");
    if(src[src.indexOf(".") - 1] != "4") {
        let newSrc = src.replace(src[src.indexOf(".") - 1] , Number(src[src.indexOf(".") - 1]) + 1 )
        image.setAttribute("src" , `${newSrc}`)
        let tempQ =Number(src[src.indexOf(".") - 1]) * 450;
      
        currentImage.style.transform = `translateX(-${tempQ}px)`

    }

})

