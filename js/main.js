var arrayImgDisplay = [
    "./img/slider pic1.jpg",
    "./img/slider pic2.jpg",
    "./img/slider pic3.jpg",
]
var i = 1
imgDisplay.src=arrayImgDisplay[0]
function picSlide(){
    imgDisplay.src=arrayImgDisplay[i++]
}
var stop1=setInterval(()=>{
    picSlide()
  if(i==arrayImgDisplay.length){
  i=0;
}
},3000)
