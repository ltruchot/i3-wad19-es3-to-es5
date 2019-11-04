
var color = localStorage.getItem('color');
/* if (!color) {
  localStorage.setItem('color', prompt('What is your favorite color?'));
} */
document.body.style.backgroundColor = color || 'white';

var colors = ['violet', 'salmon', 'aquamarine', 'blue'];
for (var c of colors) {
  var btn = document.createElement('button');
  btn.innerText = c;
  btn.style.backgroundColor = c;
  btn.addEventListener('click', function (event) {
    var currentColor = event.target.style.backgroundColor;
    document.body.style.backgroundColor = currentColor;
    localStorage.setItem('color', currentColor);
  });
  document.body.appendChild(btn);
}
