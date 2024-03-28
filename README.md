# TP : Création d'un jeu de memory

## Objectif

L'objectif de ce TP est de développer un jeu de memory simple en utilisant HTML, CSS et JavaScript. Le jeu consistera à retourner des cartes deux par deux pour trouver des paires correspondantes. L'utilisateur gagne lorsque toutes les paires ont été trouvées.

![Exemple de memory](https://sebastien-devos.fr/img/codegt/memory.jpg)

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
  
```js
// Exemple de mélange des cartes
cards.sort(() => Math.random() - 0.5);
```

2. **Création des variables nécessaires** :
   - Des variables pour chaque élément HTML à manipuler (conteneur de jeu, éléments textes pour le décompte des paires et les messages de succès).
   - Un tableau _flippedCards_ pour stocker temporairement les cartes retournées par l'utilisateur. Cela permet de comparer si les deux cartes sélectionnées correspondent.
   - Un tableau _matchedCards_ pour stocker les cartes correspondantes. Une fois que deux cartes correspondent, elles sont ajoutées à ce tableau.
   - Un compteur pour suivre le nombre de mouvements effectués par l'utilisateur.

     
3. **Création des fonctions** :
   - Une fonction pour créer les éléments des cartes _card_ utilisant des méthodes déjà connues (_createElement_, _textContent_, _appendChild_, ajout de class). Ajouter un écouteur d'événements pour gérer le clic sur la carte : lorsque la carte est cliquée, la fonction flipCard est appelée avec la carte en paramètre
   
   ```js
   // Fonction pour créer les éléments des cartes
   function createCard(value, index) {
   }
   ```

   - Une fonction pour retourner une carte. Gérez le retournement des cartes en ajoutant/enlevant une classe CSS lorsque l'utilisateur clique sur une carte.
   ```js
   // Fonction pour retourner une carte
   function flipCard(card) {
   }
   ```

   - Une fonction pour vérifier si les cartes retournées correspondent. Après avoir retourné deux cartes, vérifiez si elles correspondent. Si c'est le cas, marquez-les comme réussies. Sinon, retournez-les face cachée après un court délai.
     
   ```js
   // Fonction pour vérifier si les cartes retournées correspondent
   function checkMatch() {
   }
   ```

4. **Affichage des cartes** :
   - Utilisez une boucle `forEach` pour créer les cartes.

5. **Fin de jeu** :
   - Indiquez à l'utilisateur qu'il a gagné une fois que toutes les paires ont été trouvées.

6. **Bonus** :
   - Utiliser un effet de retournement sur vos cartes en CSS. [Voir ici](https://fr.w3docs.com/snippets/css/comment-creer-une-animation-de-retournement-3d-sur-une-boite-carte-aveccss.html#animation-de-retournement-horizontal-et-vertical target="_blank")

**Pistes et conseils** :
- Pour faciliter le développement, travaillez étape par étape. Commencez par la structure HTML, puis passez au CSS et enfin au JavaScript.
- Testez régulièrement votre jeu pour vous assurer que chaque fonctionnalité fonctionne comme prévu.
- Utilisez les commentaires dans le code pour expliquer la logique, surtout dans les parties complexes.
