Introduction à MongoDb
=============================


Plusieurs versions progressives.

Charger une version avec

```git checkout <tag>```
où `tag` peut prendre comme valeur :
* `v1` : version avec mise en place d'un contrôleur pour créer et gérer la connexion à la bd dans ./controllers/db.js
* `v2` : définition des schémas dans ./models
* `v3.1` : définition des modèles dans ./models et première interaction avec ```find()``` dans `controllers/books.js`
* `v3.2` : exemples de ```find()``` avec filtres et  findOne()
* `v3.3` : exemple pour ```findById()```     
            voir les liens (rang impair ou pair) dans table de /books
* `v3.5` :
          création de nouvelles données : ```create()```, requête ```POST```     
          gestion des erreurs liés au create() : en cas de non respect du schéma des données,   
          à tester en mettant une valeur non numérique pour l'année ou un *title* vide,   
          voir aussi la valeur par défaut attribuée à *cover* si laissé vide.    
* `v3.5.1` : manipulation de l'objet `response` pour accéder au message d'erreur de validation   
          faire les mêmes tests que pour la `v3.5`
* `v3.5.2` : création de "sous-document" : utilisation de `save()`   
          voir les routes `/books/adddetails`
* `v3.6` : mise à jour des documents avec `update()`         
          voir routes `/books/update`   
* `v3.7` : suppression de documents avec `remove()`
* `v3.8` : exemple d'API REST CRCUD avec '/bookrest'

faire ```git checkout master``` pour revenir sur la banche principale
