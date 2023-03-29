document.querySelector('#check').addEventListener('click', check)

function check() {

  const par = document.querySelector('#par').value
  const strokes = document.querySelector('#strokes').value


 
   if(strokes == 1 ){
    document.getElementById("placeToSee").innerHTML = "Hole in One!"
  }else if(strokes <= par -3){
    document.getElementById("placeToSee").innerHTML = "Albatross!"
  }else if(strokes == par -2){
    document.getElementById("placeToSee").innerHTML = "Eagle!"
  }else if(strokes == par -1){
    document.getElementById("placeToSee").innerHTML = "Birdie!"
  }else if(strokes == par){
   document.getElementById("placeToSee").innerHTML = "Par!"
  }else if (strokes == parseInt(par) + 1){
   document.getElementById("placeToSee").innerHTML = "Bogey!"
 }else if (strokes == parseInt(par) + 2){
   document.getElementById("placeToSee").innerHTML = "Double Bogey!"
 }else if (strokes == parseInt(par) + 3){
   document.getElementById("placeToSee").innerHTML = "Triple Bogey!"
 }else{
   document.getElementById("placeToSee").innerHTML = "Go Practice!"
 }

}
 