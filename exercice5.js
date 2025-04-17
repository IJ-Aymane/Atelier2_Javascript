let livres = ["Ibn Battouta", "Le Pain Nu", "Ali Zaoua"];
livres.push("L'Étranger de Camus");
livres.unshift("Zahra la rouge");
livres.pop();
livres.shift();

console.log(livres);

let categories = new Set(["Roman", "Poésie", "Histoire"]);
categories.add("Contes populaires");
categories.add("Contes populaires");
categories.delete("Roman");

console.log(categories);

let tabCategories = Array.from(categories);

let emprunts = new Map();
categories = tabCategories;

for (let i = 0; i < livres.length; i++) {
  let randomIndex = Math.floor(Math.random() * categories.length);
  emprunts.set(livres[i], categories[randomIndex]);
}

console.log(emprunts);

emprunts.set("Hamid Choukri", "Biographie");
console.log(emprunts);

emprunts.set("Fatima Zahra", "Roman moderne");
console.log(emprunts);

emprunts.set("Rachid Nini", "Chronique");
console.log(emprunts);

emprunts.set("Karim Benani");
console.log(emprunts);

emprunts.delete("Rachid Nini");
console.log(emprunts);

console.log(emprunts.has("Karim Benani"));
