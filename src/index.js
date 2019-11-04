var app = document.getElementById('app');
var semaine = [
  {
    name: 'lundi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: true },
      { name: 'jouer avec le chat', checked: false },
    ],
  },
  {
    name: 'mardi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: true },
      { name: 'jouer avec le chat', checked: false },
    ],
  },
  {
    name: 'mercredi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: true },
      { name: 'jouer avec le chat', checked: true },
    ],
  },
  {
    name: 'jeudi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: true },
      { name: 'jouer avec le chat', checked: false },
    ],
  },
  {
    name: 'vendredi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: true },
      { name: 'jouer avec le chat', checked: true },
    ],
  },
  {
    name: 'samedi',
    activites: [
      { name: 'balalaika', checked: false },
      { name: 'tv', checked: false },
      { name: 'jouer avec le chat', checked: false },
    ],
  },
];

var semaineSaved = JSON.parse(localStorage.getItem('sauvegarde'));

if (semaineSaved) {
  semaine = semaineSaved;
}


for (var i = 0; i < semaine.length; i++) {
  // contenant de chaque jour (div)
  var div = document.createElement('div');
  app.appendChild(div);

  // titre (h3)
  var h3 = document.createElement('h3');
  div.appendChild(h3);
  h3.innerText = semaine[i].name;

  // contenu (ul)
  var ul = document.createElement('ul');
  div.appendChild(ul);

  // détails du contenu (li)
  for (var j = 0; j < semaine[i].activites.length; j++) {
    // li
    var li = document.createElement('li');
    ul.appendChild(li);

    // checkbox
    var cb = document.createElement('input');
    cb.setAttribute('type', 'checkbox');
    cb.checked = semaine[i].activites[j].checked;
    cb.setAttribute('id', i + '-' + j); // id basée sur les indexs
    li.appendChild(cb);

    // event sur la checkbox
    cb.addEventListener('change', function (event) {
      var ids = event.target.id.split('-'); // indexes trouvés dans l'id
      var jourIndex = ids[0];
      var activiteIndex = ids[1];
      semaine[jourIndex].activites[activiteIndex].checked = event.target.checked;
      localStorage.setItem('sauvegarde', JSON.stringify(semaine));
    });

    // span
    var span = document.createElement('span');
    span.innerText = semaine[i].activites[j].name;
    li.appendChild(span);
  }
}


// AUTRE EXEMPLE DE SAUVEGARDE
/* function saveInLocalStorage() {
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  var sauvegarde = [];
  for (var i = 0; i < checkboxes.length; i++) {
    sauvegarde.push(checkboxes[i].checked);
  }
  localStorage.setItem('sauvegarde', JSON.stringify(sauvegarde));
}

function restoreFromLocalStorage() {
  var checkeds = JSON.parse(localStorage.getItem('sauvegarde'));
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkeds[i];
  }
}
restoreFromLocalStorage();


var checkboxes = document.querySelectorAll('input[type=checkbox]');
for (var cb of checkboxes) {
  cb.addEventListener('change', function () {
    saveInLocalStorage();
  });
}
 */
