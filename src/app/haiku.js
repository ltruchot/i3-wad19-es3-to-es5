var noms = [
  { nom: 'le chat', genre: 'masculin' },
  { nom: 'la mer', genre: 'feminin' },
  { nom: 'la vie', genre: 'feminin' },
  { nom: 'le ciel', genre: 'masculin' },
  { nom: 'le canapé', genre: 'masculin' },
  { nom: 'le petit bébé', genre: 'masculin' },
  { nom: 'le chacal', genre: 'masculin' },
  { nom: "l'ordinateur", genre: 'masculin' },
  { nom: 'la banane', genre: 'feminin' },
  { nom: 'le smartphone', genre: 'masculin' },
  { nom: 'le chien', genre: 'masculin' },
  { nom: 'la belette', genre: 'feminin' },
  { nom: 'la terre', genre: 'feminin' },
  { nom: 'Loïc', genre: 'masculin' },
];
var verbes = [
  'est',
  'devient',
  'paraît',
  'semble',
  'demeure',
  'reste',
  "a l'air",
  'passe pour',
];
var adjectifs = [
  { masc: 'bleu', fem: 'bleue' },
  { masc: 'super', fem: 'super' },
  { masc: 'autre', fem: 'autre' },
  { masc: 'bizarre', fem: 'bizarre' },
  { masc: 'difficile', fem: 'difficile' },
  { masc: 'drôle', fem: 'drôle' },
  { masc: 'étrange', fem: 'étrange' },
  { masc: 'facile', fem: 'facile' },
  { masc: 'grave', fem: 'grave' },
  { masc: 'impossible', fem: 'impossible' },
  { masc: 'jeune', fem: 'jeune' },
  { masc: 'juste', fem: 'juste' },
  { masc: 'libre', fem: 'libre' },
  { masc: 'malade', fem: 'malade' },
  { masc: 'pauvre', fem: 'pauvre' },
  { masc: 'possible', fem: 'possible' },
  { masc: 'propre', fem: 'propre' },
  { masc: 'rouge', fem: 'rouge' },
  { masc: 'sale', fem: 'sale' },
  { masc: 'simple', fem: 'simple' },
  { masc: 'tranquille', fem: 'tranquille' },
  { masc: 'triste', fem: 'triste' },
  { masc: 'vide', fem: 'vide' },
  { masc: 'doux', fem: 'doux' },
  { masc: 'faux', fem: 'faux' },
  { masc: 'français', fem: 'française' },
  { masc: 'gros', fem: 'grosse' },
  { masc: 'heureux', fem: 'heureuse' },
  { masc: 'mauvais', fem: 'mauvaise' },
  { masc: 'sérieux', fem: 'sérieuse' },
  { masc: 'vieux', fem: 'vieille' },
  { masc: 'vrai', fem: 'vraie' },
  { masc: 'ancien', fem: 'ancienne' },
  { masc: 'beau', fem: 'belle' },
  { masc: 'blanc', fem: 'blanche' },
  { masc: 'chaud', fem: 'chaude' },
  { masc: 'cher', fem: 'chère' },
  { masc: 'clair', fem: 'claire' },
  { masc: 'content', fem: 'contente' },
  { masc: 'dernier', fem: 'dernière' },
  { masc: 'désolé', fem: 'désolée' },
  { masc: 'différent', fem: 'différente' },
  { masc: 'droit', fem: 'droite' },
  { masc: 'entier', fem: 'entière' },
  { masc: 'fort', fem: 'forte' },
  { masc: 'froid', fem: 'froide' },
  { masc: 'gentil', fem: 'gentille' },
  { masc: 'grand', fem: 'grande' },
  { masc: 'haut', fem: 'haute' },
  { masc: 'humain', fem: 'humaine' },
  { masc: 'important', fem: 'importante' },
  { masc: 'joli', fem: 'jolie' },
  { masc: 'léger', fem: 'légere' },
  { masc: 'long', fem: 'longue' },
  { masc: 'meilleur', fem: 'meilleure' },
  { masc: 'mort', fem: 'morte' },
  { masc: 'noir', fem: 'noire' },
  { masc: 'nouveau', fem: 'nouvelle' },
  { masc: 'pareil', fem: 'pareile' },
  { masc: 'petit', fem: 'petite' },
  { masc: 'plein', fem: 'pleine' },
  { masc: 'premier', fem: 'première' },
  { masc: 'prêt', fem: 'prête' },
  { masc: 'seul', fem: 'seule' },
  { masc: 'vert', fem: 'verte' },
  { masc: 'vivant', fem: 'vivante' },
];

var getRandomInArray = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

function generateHaiku() {
  var obj = getRandomInArray(noms);
  var adj = getRandomInArray(adjectifs);
  var genderedAdj = adj[obj.genre === 'masculin' ? 'masc' : 'fem'];
  console.log(
    obj.nom + ' ' + getRandomInArray(verbes) + ' ' + genderedAdj + '.',
  );
}
for (var i = 0; i < 3; i++) {
  generateHaiku();
}
