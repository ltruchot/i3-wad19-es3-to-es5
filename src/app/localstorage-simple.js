var prenom = localStorage.getItem('prenom');
/*
if (!prenom) {
  var res = prompt('Quel est votre prénom');
  localStorage.setItem('prenom', res);
} else {
  alert('coucou ' + prenom);
}
*/
if (prenom) {
  document.body.innerText = 'coucou ' + prenom;
} else {
  document.getElementById('btn')
    .addEventListener('click', function () {
      localStorage.setItem('prenom', document.getElementById('ipt').value);
    });
}
