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
   - Créez un tableau contenant des paires de caractères ou d'images qui seront les faces des cartes.
   - Mélangez aléatoirement ce tableau pour que l'ordre des cartes soit aléatoire à chaque partie.
  
     javascript
// Exemple de mélange des cartes
cards.sort(() => Math.random() - 0.5);

2. **Affichage des cartes** :
   - Utilisez une boucle `for` ou `for...of` pour créer un élément HTML pour chaque carte.
   - Ajoutez un écouteur d'événements sur chaque carte pour gérer le clic.

3. **Logique de retournement des cartes** :
   - Gérez le retournement des cartes en ajoutant/enlevant une classe CSS lorsque l'utilisateur clique sur une carte.

4. **Vérification des correspondances** :
   - Après avoir retourné deux cartes, vérifiez si elles correspondent. Si c'est le cas, marquez-les comme réussies. Sinon, retournez-les face cachée après un court délai.

5. **Fin de jeu** :
   - Indiquez à l'utilisateur qu'il a gagné une fois que toutes les paires ont été trouvées.

**Pistes et conseils** :
- Pour faciliter le développement, travaillez étape par étape. Commencez par la structure HTML, puis passez au CSS et enfin au JavaScript.
- Testez régulièrement votre jeu pour vous assurer que chaque fonctionnalité fonctionne comme prévu.
- Utilisez les commentaires dans le code pour expliquer la logique, surtout dans les parties complexes.
