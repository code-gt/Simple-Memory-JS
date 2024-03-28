# TP : Création d'un jeu de memory

## Objectif

L'objectif de ce TP est de développer un jeu de memory simple en utilisant HTML, CSS et JavaScript. Le jeu consistera à retourner des cartes deux par deux pour trouver des paires correspondantes. L'utilisateur gagne lorsque toutes les paires ont été trouvées.

## Technologies utilisées

- **HTML** : pour structurer le contenu du jeu.
- **CSS** : pour styliser le jeu et rendre l'interface agréable.
- **JavaScript** : pour ajouter l'interactivité nécessaire au jeu (retourner les cartes, vérifier les correspondances, suivre le progrès).

## Consignes

### Partie HTML

1. **Structure de base** : Créez une structure HTML simple avec un titre pour le jeu, un conteneur pour le plateau de jeu et des éléments pour afficher le nombre de paires trouvées et les messages de succès.

### Partie CSS

1. **Stylisation** : Utilisez le CSS pour styliser votre jeu. Ajoutez des couleurs, des espacements et des transitions pour rendre le jeu plus attrayant. Utilisez `[class^="nom"]` pour styliser des éléments spécifiques.

### Partie JavaScript

1. **Création des cartes** :
   - Créez un tableau contenant des paires de caractères ("A", "B", "C", ...) qui seront les faces des cartes.
   - Mélangez aléatoirement ce tableau pour que l'ordre des cartes soit aléatoire à chaque partie.
  
```javascript
// Exemple de mélange des cartes
cards.sort(() => Math.random() - 0.5);
```

2. **Création des variables nécessaires** :
   - Des variables pour chaque élément HTML à manipuler (conteneur de jeu, éléments textes pour le décompte des paires et les messages de succès).
   - Un tableau _flippedCards_ pour stocker temporairement les cartes retournées par l'utilisateur. Cela permet de comparer si les deux cartes sélectionnées correspondent.
   - Un tableau _matchedCards_ pour stocker les cartes correspondantes. Une fois que deux cartes correspondent, elles sont ajoutées à ce tableau.
   - Un compteur pour suivre le nombre de mouvements effectués par l'utilisateur.
   - 
3. **Création des fonctions** :
   - Une fonction pour créer les éléments des cartes _card_ utilisant des méthodes déjà connues (_createElement_, _textContent_, _appendChild_, ajout de class). Ajouter un écouteur d'événements pour gérer le clic sur la carte : lorsque la carte est cliquée, la fonction flipCard est appelée avec la carte en paramètre
   
   ```js
   function createCard(value, index) {
       // Créer un nouvel élément div pour représenter la carte
       // Ajouter une class pour le style
       // Définir l'attribut de données 'index' pour garder une trace de l'index de la carte
       // Définir le texte de la carte comme la valeur passée en paramètre
       // Ajouter un écouteur d'événements pour gérer le clic sur la carte : lorsque la carte est cliquée, la fonction flipCard est appelée avec la carte en paramètre
       // Ajouter la carte en tant qu'enfant du conteneur de jeu
   }
   ```

     - Une fonction pour retourner une carte. Gérez le retournement des cartes en ajoutant/enlevant une classe CSS lorsque l'utilisateur clique sur une carte.
```js
function flipCard(card) {
  // Vérifier si la carte n'est pas déjà retournée et n'est pas déjà assortie
  if (!flippedCards.includes(card) && !matchedCards.includes(card)) {
    // Ajouter une class
    // Ajouter la carte à la liste des cartes retournées _flippedCards_ gràce à push()
    // Vérifier s'il y a deux cartes retournées
  }
}
```

     - Une fonction pour vérifier si les cartes retournées correspondent. Après avoir retourné deux cartes, vérifiez si elles correspondent. Si c'est le cas, marquez-les comme réussies. Sinon, retournez-les face cachée après un court délai.
     
```js
// Fonction pour vérifier si les cartes retournées correspondent
function checkMatch() {
  // Destructuration pour obtenir les deux cartes retournées
  // Récupérer le texte des cartes

  // Vérifier si les valeurs des cartes correspondent et ajouter si besoin les cartes assorties à la liste des cartes assorties _matchesCards_
    // Ajouter une class 'success' pour indiquer que les cartes sont assorties
    // Incrémenter le compteur de paires assorties et mettre à jour le contenu du compteur de paires assorties
    // Afficher le message de succès et le masquer le message de succès après 2 secondes

    // Vérifier si toutes les cartes ont été assorties pour afficher si besoin une alerte de félicitations
    // Si les valeurs des cartes ne correspondent pas, masque les lettres en retirant la classe 'flipped' et réinitialiser la liste des cartes retournées _flippedCards_
}
```

4. **Affichage des cartes** :
   - Utilisez une boucle `forEach` ou `for...of` pour créer les cartes.

5. **Fin de jeu** :
   - Indiquez à l'utilisateur qu'il a gagné une fois que toutes les paires ont été trouvées.

**Pistes et conseils** :
- Pour faciliter le développement, travaillez étape par étape. Commencez par la structure HTML, puis passez au CSS et enfin au JavaScript.
- Testez régulièrement votre jeu pour vous assurer que chaque fonctionnalité fonctionne comme prévu.
- Utilisez les commentaires dans le code pour expliquer la logique, surtout dans les parties complexes.
