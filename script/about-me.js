var myVar;
        
function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("header").style.backgroundColor = "transparent";
  }


  window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');

    loader.addEventListener('transitionend', () =>{
        document.body.removeChild(loader);
    })
})



let number = document.getElementById('number1');
let counter = 0;
setInterval(() =>{
  if (counter == 90){
    clearInterval();
  }else{
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 90);

let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(() =>{
  if (counter2 == 65){
    clearInterval();
  }else{
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
  
}, 120);

let number3 = document.getElementById('number3');
let counter3 = 0;
setInterval(() =>{
  if (counter3 == 25){
    clearInterval();
  }else{
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }

}, 300);