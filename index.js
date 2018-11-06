function sayHelloConsole() {
  console.log("Hello, Console!");
}

function sayHelloPopUp() {
  alert("Hello, World!")
}

function sayHelloBrowser() {
  var p=document.getElementById("hello");
  p.innerHTML="Hello, World!";
}

function sayHelloStranger() {
  var i=prompt("Please enter your name", "Issa")
  alert("Hello" + i)
}
