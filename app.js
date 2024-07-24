const arr=[
    "./images.jpg",
    "./images (1).jpg",
    "./download.jpg",
    "./images (2).jpg"

]
const btn1=document.getElementById('nxt');
const btn2=document.getElementById('pre');
const img=document.getElementById('display-img');
let currentIndex=0;
btn1.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % arr.length; 
    console.log(currentIndex);
    img.src = arr[currentIndex];
});
btn2.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
   img.src = arr[currentIndex];
})
console.log(arr,length);