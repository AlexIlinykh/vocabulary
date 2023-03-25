toggle()
function toggle() {
  var hid = document.getElementsByClassName("def");
  // Emulates jQuery $(element).is(':hidden');
  if(hid[0].style.visibility === "hidden") {
      hid[0].style.visibility = "visible";
  }
  else {
    hid[0].style.visibility = "hidden";
  }
}




function rand(){
  const words = ["abattoir.html","accoutred.html", "acrimonious.html", "actinic.html","admonished.html","ambulated.html"]
  console.log(words[Math.floor(Math.random() * words.length)]);
  window.location.href = words[Math.floor(Math.random() * words.length)]
}