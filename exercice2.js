
let etu1 = {
  nom: "iben",
  prenom: "aymane",
  age: 23,
  cne: "d87",

  etudier: function () {
    console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
  }
};

let etu2 = {
  nom: "nimo",
  prenom: "nimo",
  age: 22,
  cne: "d88",

  etudier: function () {
    console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
  }
};

let prof = {
  nom: "El Bouhorma",
  age: 45,
  cin: "d1",

  enseigner: function () {
    console.log(`Professeur ${this.nom} est en train d'enseigner.`);
  }
};


let listeEtudiants = [etu1, etu2];


listeEtudiants.sort(function (a, b) {
  if (a.nom !== b.nom) {
    return a.nom.localeCompare(b.nom);
  } else if (a.prenom !== b.prenom) {
    return a.prenom.localeCompare(b.prenom);
  } else {
    return a.age - b.age;
  }
});

for (let i = 0; i < listeEtudiants.length; i++) {
  console.log(`${listeEtudiants[i].nom} ${listeEtudiants[i].prenom}, Âge: ${listeEtudiants[i].age}`);
}
