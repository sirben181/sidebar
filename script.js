const menuToggle=document.querySelector('.menuToggle');
const closeBtn=document.querySelector(".closeBtn")
const link=document.querySelector('.sidbar');
menuToggle.addEventListener('click', function(){
 link.classList.toggle('showMenu')
// if(link.classList.contains("show-links")){
//     link.classList.remove('show-links');
// }else {
//     link.classList.add('show-links');
// console.log(link.classList.contains('show-links'))
// }
})
closeBtn.addEventListener("click",function(){
    link.classList.remove('showMenu')
})
