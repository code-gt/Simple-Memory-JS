/* VARIABLES */

  // Création du tableau contenant les cartes (10 paires)
  
  // Mélanger aléatoirement un tableau
  
  // Variables du plateau de jeu, des zones de messages et du compteur
  
  // Variable pour suivre les cartes retournées

  // Variable pour suivre les cartes assorties

  // Variable pour suivre le nombre de paires


/* FUNCTIONS */

  // Fonction pour créer les éléments des cartes
function createCard(value, index) {
    // Création d'un nouvel élément div pour représenter la carte
  
    // Ajout de la class 'card'

    // Définition de l'attribut de données 'index' pour garder une trace de l'index de la carte
    card.dataset.index = index;
    // Définition du texte de la carte comme la valeur passée en paramètre
  
    // Lorsque la carte est cliquée, la fonction flipCard est appelée avec la carte en paramètre

    // Ajout de la carte en tant qu'enfant du conteneur de jeu
}


// Fonction pour retourner une carte
function flipCard(card) {
  // Vérifie si la carte n'est pas déjà retournée et n'est pas déjà assortie
  if (!flippedCards.includes(card) && !matchedCards.includes(card)) {
    // Ajoute la class de retournement 

    // Ajoute la carte à la liste des cartes retournées gràce à la méthode push()

    // Vérifie s'il y a deux cartes retournées. Si deux cartes sont retournées, vérifie si elles correspondent après 1 seconde
  }
}

// Fonction pour vérifier si les cartes retournées correspondent
function checkMatch() {
  // Destructuration pour obtenir les deux cartes retournées
  const [card1, card2] = flippedCards;

  // Récupère les textes des cartes

 
  // Vérifie si les valeurs des cartes correspondent
  if (/*condition*/) {
    // Si les valeurs correspondent, ajoute les cartes assorties à la liste des cartes assorties gràace à push()
   
    // Ajoute la classe 'success'

    // Incrémente le compteur de paires assorties et mettre à jour le contenu du compteur de paires assorties

    // Afficher le message de succès et le masquer le message de succès après 2 secondes

    // Vérifie si toutes les cartes ont été assorties gràace à length
    if (/*condition*/) {
     
    }
  } else {
    // Si les valeurs des cartes ne correspondent pas, retirer la classe 'flipped'
  
  }
  // Réinitialise la liste des cartes retournées

}

  // Créer les cartes sur le plateau de jeu
