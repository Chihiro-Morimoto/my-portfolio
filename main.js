const sameBirthday = document.getElementById("same-birthday");
const introQName = document.getElementById("intro-q-name");
const introAName = document.getElementById("intro-a-name");
const introQAge = document.getElementById("intro-q-age");
const introAAge = document.getElementById("intro-a-age");
const introQBirthday = document.getElementById("intro-q-birthday");
const introABirthday = document.getElementById("intro-a-birthday");
const introQSite = document.getElementById("intro-q-site");
const introASite = document.getElementById("intro-a-site");
const introQUniv = document.getElementById("intro-q-univ");
const introAUniv = document.getElementById("intro-a-univ");
const introQMajor = document.getElementById("intro-q-major");
const introAMajor = document.getElementById("intro-a-major");
const introQHobby = document.getElementById("intro-q-hobby");
const introAHobby = document.getElementById("intro-a-hobby");

window.onload = function () {
  alert("見に来てくれてありがとう！");
};

introQName.onclick = function () {
  introAName.style.visibility = "visible";
};

introQAge.onclick = function () {
  introAAge.style.visibility = "visible";
};

introQBirthday.onclick = function () {
  introABirthday.style.visibility = "visible";
};

introQSite.onclick = function () {
  introASite.style.visibility = "visible";
};

introQUniv.onclick = function () {
  introAUniv.style.visibility = "visible";
};

introQMajor.onclick = function () {
  introAMajor.style.visibility = "visible";
};

introQHobby.onclick = function () {
  introAHobby.style.visibility = "visible";
};

sameBirthday.onclick = function () {
  sameBirthday.textContent =
    "A.あ～ちゃん(Perfume)、丹生明里(日向坂46)、山崎方正etc...";
};
