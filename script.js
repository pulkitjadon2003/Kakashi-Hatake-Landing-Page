
var tl = gsap.timeline()

tl
.from("#main",{
    opacity:0,
    scale:.1
})
.from("#nav",{
    y:-100,
    delay:.2,
    opacity:0
})
.from("#nav #img img",{
    scale:.01,
    rotate:"720deg",
    ease:"none",
    duration:.5,
})
.from("#nav2 h5",{
    scale:0,
    stagger:.2
})
.from("#info",{
    scale:0
})
.from("#info>h1",{
    x:-400,
    stagger:.2,
    opacity:0
})
.from("#info>h5,h3,p",{
    scale:0,
    stagger:.2
})
.from("#profile img",{
    opacity:0,
    x:"50%",
    rotateY: 80,
    duration:1
})


var img= document.querySelector("#nav img")
var img1= document.querySelector("#nav #img")

var r =0
var load =0
img.addEventListener("click",()=>{
    r+=360
    load+=10
    img.style.rotate= `${r}deg`
    console.log(load);
    if(load>=100){
       img1.removeChild(img1.firstChild)
       img1.innerHTML =`
       <img src="pngwing.com.png" alt="">`
        


    }

})