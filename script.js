if(!sessionStorage.getItem('toggledef')){
  sessionStorage.setItem('toggledef','false')
}
let toggledef = sessionStorage.getItem('toggledef') 
let hid = document.getElementsByClassName("def");
let green = document.getElementsByClassName("on");
let red = document.getElementsByClassName("off");
const words = ["abattoir.html","accoutred.html", "acrimonious.html", "actinic.html","admonished.html","ambulated.html","apoplexy.html","apotheosis.html","apposite.html",
"apprehension.html", "approbation.html", "aspersions.html","atavistic.html","badinage.html","barratry.html","belabor.html","beleaguered.html","bellicosity.html","bilious.html",
"billowing.html","blandishments.html","callow.html","calve.html","cantankerous.html","capricious.html","castigate.html","caul.html","cavorting.html","cerulean.html","charnel.html",
"ciphers.html","commensurate.html","conniption.html","consternation.html","conurbation.html","coruscate.html","cowed.html","credulity.html","demure.html","desultory.html",
"detritus.html","dissembling.html","ditty.html","doggerel.html","dour.html","eidetic.html","enervate.html","escalade.html","exasperated.html","excoriating.html","exhort.html",
"fecundity.html","ferrous.html","flippant.html","flouted.html","frenetic.html","fugue.html","fuliginous.html","gait.html","gallivant.html","gaolers.html","garish.html",
"garrulous.html","gelid.html","gelling.html","gleaned.html","gossamer.html","haughty.html","histrionic.html","ignominious.html","impertinent.html","imprecation.html",
"incandescent.html","incarnadine.html","inchoate.html","indelible.html","indolent.html","inimical.html","inimitable.html","inscrutable.html","insipid.html","insouciance.html",
"integument.html","intransigence.html","inundation.html","inured.html","irascible.html","jocularity.html","keening.html","knave.html","languid.html","languorous.html","laudable.html",
"laurels.html","leering.html","lilting.html","liveried.html","lugubrious.html","lurid.html","macabre.html","maudlin.html","mien.html","ministration.html","munificent.html",
"nascent.html","obdurate.html","obstreperous.html","odious.html","opalescent.html","opprobrium.html","ossuary.html","pantomime.html","parochial.html","paucity.html","pejorative.html",
"pendulous.html","pensive.html","perfunctory.html","perseverate.html","perspicacity.html","petulant.html","precocious.html","predilection.html","preternatural.html","proclivity.html",
"prosaic.html","proselytizing.html","providential.html","pugilist.html","pugnacious.html","punitive.html","rapt.html","recalcitrant.html","redolent.html","refulgent.html","remunerative.html",
"replevin.html","resplendent.html","reticence.html","reverberate.html","rheumatic.html","rigmarole.html","roil.html","salacious.html","sartorial.html","scriveners.html","scrupulous.html",
"scurrilous.html","sibilant.html","slake.html","slovenly.html","sobriquet.html","somnambulant.html","sonorous.html","soporific.html","stygian.html","suffusing.html","susurration.html",
"syncopated.html","temerity.html","tersely.html","timbre.html","truculent.html","ululating.html","undulating.html","unrequited.html","vacillate.html","venality.html","veracity.html",
"vermillion.html","vestibule.html","vestigial.html","vicissitude.html","vitrify.html","vituperation.html","vivacious.html","voltaic.html","whickering.html","wreath.html"]

toggle()
function toggle() {

  // Emulates jQuery $(element).is(':hidden');
  if(hid[0].style.visibility === "hidden") {
      hid[0].style.visibility = "visible";
  }
  else {
    hid[0].style.visibility = "hidden";
  }
}

function deftoggle(){
  if (toggledef === 'false'){
    sessionStorage.setItem('toggledef','true')
    toggledef = sessionStorage.getItem('toggledef') 
    green[0].style.visibility = "visible";
    red[0].style.visibility = "hidden";
    toggle()
  }
  else{
    sessionStorage.setItem('toggledef','false')
    toggledef = sessionStorage.getItem('toggledef') 
    green[0].style.visibility = "hidden";
    red[0].style.visibility = "visible";
    toggle()
  }
}
checktoggle()
function checktoggle(){
  if (toggledef === 'true'){
    toggle()
    green[0].style.visibility = "visible";
  }
  else{
    red[0].style.visibility = "visible";
  }

}

function rand(){
  window.location.href = words[Math.floor(Math.random() * words.length)]
}
function randfromhome(){
  window.location.href = "./words/" + words[Math.floor(Math.random() * words.length)]
}

