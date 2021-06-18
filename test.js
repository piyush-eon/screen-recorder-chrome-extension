let code = document.getElementsByTagName("code");

var ModalDiv = document.createElement("div");
ModalDiv.id = "modal";
var sheet = document.createElement("style");
sheet.innerHTML = `#modal {
    display:none;
    border:1px solid black;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:10000;
    width:200px;
    height:200px;
}`;
document.body.appendChild(sheet);
document.body.appendChild(ModalDiv);

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

console.log(code);
