// var button = document.getElementsByTagName('button');
//
// button[0].addEventListener('click',function(){
//   console.log('Clicked!!!');
// }); //mouseenter,mouseleave

var button = document.getElementById("enter");
var userInput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

button.addEventListener('click', function() {
  if (inputLength() > 0) {
    addToList();
  }
});

userInput.addEventListener('keypress', function(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addToList();
  }
});

liEvent();
buttonListElement();

function inputLength() {
  return userInput.value.length;
}

function addToList() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  li.appendChild(document.createTextNode(userInput.value));
  button.appendChild(document.createTextNode("Delete"));
  ul.appendChild(li);
  li.appendChild(button);
  userInput.value = "";
  liEvent();
  buttonListElement();
}

function liEvent(){
  li.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.toggle('done');
    });
  });
}


function buttonListElement() {
  var button = document.querySelectorAll('li button');
  button.forEach(function(element) {
    element.addEventListener('click', function() {
      this.parentNode.remove();
    });
  });
}
