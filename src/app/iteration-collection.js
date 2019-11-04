/*
var fLang = ['haskell', 'lisp', 'scheme'];
var ooLang = ['c#', 'Java', 'python'];

var filterC = function (el) {
  return el !== 'c#';
};

var mapToLove = function (language) {
  return "j'aime le langage " + language;
};

var languages = fLang
  .concat(ooLang)
  .filter(filterC)
  .map(mapToLove);
console.log(languages);

var obj = {
  toto: 'titi',
  tete: {
    a: {
      b: 'c',
      f() {},
    },
  },
};
console.log(obj.tete.a.f());

var orque = {
  nom: "L'orque",
  poids: 7000,
  taille: 10000,
  couleur: 'noir et blanc',
  nourriture: ['le phoque', 'le dauphin', "l'humain"],
  afficherNourriture() {
    console.log(this.nom + ' aime manger ' + this.nourriture.join(',') + '.');
  },
  afficherDescription() {
    console.log(
      'je suis '
        + this.nom
        + ' et je suis '
        + this.color
        + '. Je pèse '
        + this.poids
        + 'kg et je mesure '
        + this.taille
        + ' cm',
    );
  },
};
*/
import { prop } from 'ramda';

var animaux = [
  {
    nom: "L'orque",
    poids: 7000,
    taille: 10000,
    couleur: 'noir et blanc',
  },
  {
    nom: "l'aigle royal",
    poids: 3.2,
    taille: 2.15,
    couleur: 'brune',
  },
  {
    nom: 'panda',
    poids: 70,
    taille: 120,
    couleur: 'balanc_noir',
  },
  {
    nom: "l'écureuil",
    poids: 0.33,
    taille: 21,
    couleur: 'roux',
    nourriture: ['glands', 'noisettes', 'noix'],
  },
  {
    nom: 'La Chouette',
    poids: 3.5,
    taille: 30,
    couleur: 'blanc',
    nourriture: ['insectes', 'rongeurs', 'idk'],
  },
  {
    nom: 'le panda roux',
    couleur: 'rouge',
    poids: '3-6KG',
    taille: '58cm',
  },
  {
    nom: 'la Chauve Souris',
    poids: 400,
    taille: 20,
    couleur: 'noir',
    nourriture: ['ver de terre', 'souris'],
  },
  {
    nom: 'le jaguar',
    poids: '120 kg',
    taille: '1.85 m',
    couleur: 'noir',
  },
  {
    nom: 'le kangourou',
    poids: '85kg',
    taille: '1.8m',
    couleur: 'roux',
  },
  {
    nom: 'le wapiti',
    poids: '225 kg',
    taille: '130cm',
    couleur: 'beige',
    nourriture: ['graminées', 'plantes', 'feuilles', 'écorces'],
  },
  {
    nom: 'Chien',
    poids: '3kg',
    taille: '15 – 110 cm',
    couleur: 'noir',
  },
  {
    nom: 'la girafe',
    poids: 1.1,
    taille: 5,
    couleur: 'jaune fauve',
  },
  {
    nom: 'Oie',
    poids: '3kg',
    taille: 'medium',
    couleur: 'grey',
  },
];
var nomAnimaux = animaux.map(prop('nom'));

var colorAnimaux = animaux.map(prop('couleur'));

console.log(nomAnimaux, colorAnimaux);
/*
console.table(animaux);

var afficherDescription = function (a) {
  return `${a.nom} pèse en moyenne ${a.poids}, mesure ${a.taille} et est souvent de couleur ${a.couleur}`;
};
var afficherNourriture = function (a) {
  return `${a.nom} se nourrit essentiellement de ${a.nourriture[0]}`;
};

function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return !isEven(n);
}

var descriptions = animaux.map(afficherDescription);
var count = 0;
for (var description of descriptions) {
  var p = document.createElement('p');
  p.innerText = description;
  p.style.borderBottom = '2px dotted grey';
  document.body.appendChild(p);
  if (isEven(count)) {
    p.style.backgroundColor = 'lightgrey';
  }

  count++;
}
*/
