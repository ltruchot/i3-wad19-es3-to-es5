// saluer l'utilisateur
var btnEl = document.getElementById('btn');
btnEl.addEventListener('click', () => {
  var headerEl = document.getElementById('entete');
  var iptEl = document.getElementById('nom');
  headerEl.innerText = `Bonjour ${iptEl.value}`;
  iptEl.value = '';
});

// données sur les hamburgers
var burgers = [
  { nom: 'cheese', ingr: ['steak', 'fromage'] },
  { nom: 'chicken', ingr: ['tomate', 'poulet'] },
  { nom: 'seitan', ingr: ['seitan', 'salade'] },
];

// ameliorerBurger :: burger -> burger amélioré
var ameliorerBurger = function (burger) {
  var burgerAmeliore = burger;
  var vegetarien = true;

  // pour chaque ingrédient, vérifier si c'est  de la viande
  burgerAmeliore.ingr.forEach(function (ingredient) {
    if (ingredient === 'poulet' || ingredient === 'steak') {
      vegetarien = false;
    }
  });

  burgerAmeliore.veg = vegetarien;
  return burger;
};

// améliorer chaque burger: version procedurale
for (var i = 0; i < burgers.length; i++) {
  ameliorerBurger(burgers[i]);
}

// améliorer chaque burger: version fonctionnelle
// burgers.forEach(ameliorerBurger);

// transformer les data en HTML, et les mettre dans la page
var menuEl = document.getElementById('menu');
burgers.forEach((burger, index) => {
  menuEl.innerHTML += `
    <div class="card">
      <img src="/assets/images/${index}.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          ${burger.nom} - 10 EUR
        </h5>
        <p class="card-text">
          Ingrédients : <span>${burger.ingr.join(', ')}</span>
          ${burger.veg ? '<span class="badge badge-success">végé</span>' : ''}
        </p>
        <button>
          Choisir
        </button>
      </div>
    </div>
`;
});

// fizzBuzz:: int -> (int || string)
function fizzBuzz(nbr) {
  var result = '';
  if (nbr % 3 === 0) {
    result += 'fizz';
  }
  if (nbr % 5 === 0) {
    result += 'buzz';
  }
  if (result === '') {
    result = nbr;
  }
  return result;
}
var q = window.prompt('Donnez votre chiffre, pui regardez la console.');
var r = fizzBuzz(q);
console.log(r);
