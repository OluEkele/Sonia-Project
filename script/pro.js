// let slide = tns({
//     container : ".body-slide",
//     "items" : 1,
//     "slideBy" : "1",
//     "speed" : 100,
//     "nav" : false,
//     autoplay : true,
//     controls : false,
//     autoplayButtonOutput : false,
//     Responsive: {
//        1600: {
//         items : 4, 
//         },
//        1024: {
//         items : 3,
//         gutter : 20
//        },
//        768: {
//         items : 2,
//         gutter : 20
//        },
//        480: {
//         items : 1
        
//        }
//     }
// })






// var myVar;
        
// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
//   }
  
//   function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }    




window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () =>{
        document.body.removeChild(loader);
    })
})





var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}