document.getElementById("shield").addEventListener("mouseover", shieldF);
document.getElementById("monitor").addEventListener("mouseover", monitorF);
document.getElementById("nuvem").addEventListener("mouseover", nuvemF);
document.getElementById("automatic").addEventListener("mouseover", automaticF);
document.getElementById("site").addEventListener("mouseover", siteF);
document.getElementById("man").addEventListener("mouseover", manF);

function shieldF() {
  document.getElementById("monitorBen").style.display = "none";
  document.getElementById("siteBen").style.display = "none";
  document.getElementById("manBen").style.display = "none";
  document.getElementById("automaticBen").style.display = "none";
  document.getElementById("nuvemBen").style.display = "none";

  document.getElementById("shieldBen").style.display = "block";
}

function monitorF() {
  document.getElementById("shieldBen").style.display = "none";
  document.getElementById("siteBen").style.display = "none";
  document.getElementById("manBen").style.display = "none";
  document.getElementById("automaticBen").style.display = "none";
  document.getElementById("nuvemBen").style.display = "none";

  document.getElementById("monitorBen").style.display = "block";
}

function nuvemF() {
  document.getElementById("shieldBen").style.display = "none";
  document.getElementById("siteBen").style.display = "none";
  document.getElementById("manBen").style.display = "none";
  document.getElementById("automaticBen").style.display = "none";
  document.getElementById("monitorBen").style.display = "none";

  document.getElementById("nuvemBen").style.display = "block";
}

function automaticF() {
  document.getElementById("shieldBen").style.display = "none";
  document.getElementById("siteBen").style.display = "none";
  document.getElementById("manBen").style.display = "none";
  document.getElementById("monitorBen").style.display = "none";
  document.getElementById("nuvemBen").style.display = "none";

  document.getElementById("automaticBen").style.display = "block";
}

function siteF() {
  document.getElementById("shieldBen").style.display = "none";
  document.getElementById("monitorBen").style.display = "none";
  document.getElementById("manBen").style.display = "none";
  document.getElementById("automaticBen").style.display = "none";
  document.getElementById("nuvemBen").style.display = "none";

  document.getElementById("siteBen").style.display = "block";
}

function manF() {
  document.getElementById("shieldBen").style.display = "none";
  document.getElementById("siteBen").style.display = "none";
  document.getElementById("monitorBen").style.display = "none";
  document.getElementById("automaticBen").style.display = "none";
  document.getElementById("nuvemBen").style.display = "none";

  document.getElementById("manBen").style.display = "block";
}

var altura = $(window).height();
document.getElementById("raio").style.maxHeight = String(altura+1)+"px";
console.log(String(altura-500)+"px");