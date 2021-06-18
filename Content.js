var myDiv = document.createElement("video");
var ModalDiv = document.createElement("div");
var sheet = document.createElement("style");
let code = document.getElementsByTagName("code");
myDiv.id = "player1";
ModalDiv.id = "modal";
document.body.appendChild(myDiv);
document.body.appendChild(ModalDiv);
document.body.appendChild(sheet);

window.onload = function () {
  var constraints = { audio: false, video: true };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      var video = document.getElementById("player1");
      video.srcObject = mediaStream;
      // video.muted = true;
      video.play();
    })
    .catch(function (err) {
      console.log("yikes, and err!" + err.message);
    });
};

for (var i = 0; i < code.length; i++) {
  (function (index) {
    code[index].addEventListener("mouseover", function () {
      ModalDiv.innerHTML = code[index].innerHTML;
      ModalDiv.style.display = "block";
    });

    code[index].addEventListener("mouseout", function () {
      ModalDiv.innerHTML = code[index].innerHTML;
      ModalDiv.style.display = "none";
    });
  })(i);
}

sheet.innerHTML = `#player1 {
    position:fixed;
    bottom:10px;
    right:10px;
    border-radius:50%;
    z-index:10000;
    width:200px;
    height:200px;
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg); /* Safari and Chrome */
    object-fit: cover;
}

#modal {
    display:none;
    border:1px solid black;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:10000;
    min-width:200px;
    height:200px;
    padding:10px;
    background-color:white;
}`;
