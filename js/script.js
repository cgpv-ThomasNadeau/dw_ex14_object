const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];

//console.log(livres[0].titre);
//console.log(livres.length);
//console.table(livres);

for (const index in livres) {
    console.log(livres[index].titre,", ", livres[index].auteur)
}

livres.push ({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false });

for (const index in livres) {
    if (livres[index].titre === "Le Seigneur des anneaux") {livres[index].disponible = true}
}

//console.table(livres);

const find451 = (livres) => livres.titre == "Fahrenheit 451" ;
let index = livres.findIndex(find451);
if (index >= 0) {livres.splice(index,1);}

//console.table(livres);

livresDispo = livres.filter((livre) => {if (livre.disponible) {return livre;}});

//console.table(livresDispo)

for (const index in livres) {
    if (livres[index].annee < 1960) {console.log(livres[index].titre)}
}

function afficherCatalogue(livres) {
    const catalogue = livres.sort((a, b) => a.annee - b.annee).map((livre) => {
        if (livre.disponible) { return `${livre.titre} (${livre.auteur}, ${livre.annee}) - Disponible`;}
        return `${livre.titre} (${livre.auteur}, ${livre.annee}) - Non Disponible`;
    }) 
    console.log("=== Catalogue des livres ===")
    for (const index in catalogue) {
        console.log("=> ", catalogue[index])
    }
}
afficherCatalogue(livres)
function rechercherLivre() {
    let auteurRecherche = prompt("Entrez le nom de l'auteur");
    let foundauteur = false
    let foundbook;
    for (const index in livres) {
        if (livres[index].auteur === auteurRecherche) {foundauteur = true; foundbook = livres[index].titre; break;};
    }
    // livrestrouver = livres.filter((livre) => { if (livre.auteur === auteurRecherche) { foundauteur = true; return foundbook = livre.titre; } })
    if (foundauteur) { alert(`Livres trouvés : ${foundbook}`)}
    else { alert(`Aucun livre de ${auteurRecherche} trouvé.`)}
}
