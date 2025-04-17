class Vecteur2D {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Vecteur(x: ${this.x}, y: ${this.y})`);
    }
  
    ajouter(autreVecteur) {
      return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
  }
  
  
  let v1 = new Vecteur2D();          
  let v2 = new Vecteur2D(3, 4);       
  
  v1.afficher();
  v2.afficher();
  
  let somme = v1.ajouter(v2);
  somme.afficher();                 
  
  
  class Rectangle {
    constructor(longueur = 1, largeur = 1) {
      this.longueur = longueur;
      this.largeur = largeur;
      this.nom = "rectangle";
    }
  
    afficher() {
      console.log(`${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }
  
    surface() {
      return this.longueur * this.largeur;
    }
  }
  

  class Carre extends Rectangle {
    constructor(cote = 1) {
      super(cote, cote);          
      this.nom = "carré";
    }
  }
  

  let rect = new Rectangle(5, 3);
  let carre = new Carre(4);
  
  rect.afficher();
  console.log("Surface:", rect.surface());
  
  carre.afficher();
  console.log("Surface:", carre.surface());

  class Point {
    constructor(x = 0.0, y = 0.0) {
      this.x = x;
      this.y = y;
    }
  
    afficher() {
      console.log(`Point(x: ${this.x}, y: ${this.y})`);
    }
  }
  
  class Segment {
    constructor(x1, y1, x2, y2) {
      this.orig = new Point(x1, y1);       
      this.extrem = new Point(x2, y2);     
    }
  
    afficher() {
      console.log("Segment:");
      this.orig.afficher();
      this.extrem.afficher();
    }
  }
  

  let s = new Segment(1, 2, 4, 6);
  s.afficher();
  