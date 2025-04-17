class Voiture {
  constructor(nom, marque, annee, genre, carburant) {
    this.nom = nom;
    this.marque = marque;
    this.annee = annee;
    this.genre = genre;
    this.carburant = carburant;
  }
}

class Hyndai extends Voiture {
  constructor(nom, marque, annee, genre, carburant, serie, estHybride) {
    super(nom, marque, annee, genre, carburant);
    this.serie = serie;
    this.estHybride = estHybride;
  }

  alarme() {
    console.log(`Alerte sur la Hyndai ${this.nom}`);
  }
}

class Ford extends Voiture {
  constructor(nom, marque, annee, genre, carburant, options) {
    super(nom, marque, annee, genre, carburant);
    this.options = options;
  }
}

let voitures = [];

let h1 = new Hyndai("Elantra", "Hyndai", 2020, "berline", "essence", "Série A", true);
let h2 = new Hyndai("Ioniq", "Hyndai", 2018, "compacte", "électrique", "Série B", true);
let h3 = new Hyndai("Tucson", "Hyndai", 2021, "SUV", "essence", "Série C", false);
let h4 = new Hyndai("Kona", "Hyndai", 2023, "SUV", "électrique", "Série D", true);

let f1 = new Ford("Mustang", "Ford", 2022, "sport", "essence", ["GPS", "Bluetooth"]);
let f2 = new Ford("Focus", "Ford", 2019, "citadine", "diesel", ["Airbags", "ABS"]);
let f3 = new Ford("Explorer", "Ford", 2020, "SUV", "essence", ["Caméra recul", "Clim auto"]);
let f4 = new Ford("EcoSport", "Ford", 2021, "SUV", "diesel", ["Bluetooth", "Régulateur de vitesse"]);

voitures.push(h1, h2, h3, h4, f1, f2, f3, f4);

voitures.sort((a, b) => a.annee - b.annee);

for (let i = 0; i < voitures.length; i++) {
  console.log(`${voitures[i].marque} ${voitures[i].nom} - Année: ${voitures[i].annee}`);
}
