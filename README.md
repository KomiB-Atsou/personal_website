# blog_atsou

Publication en local
hugo

Démarrage serveur local
hugo server

Déploiement en prod
hugo deploy --target=production

Démarrage du projet exemple en étant à la racine du projet
hugo server --source .\themes\hugo-bearblog\exampleSite --themesDir ..\..

Pour publier et déployer sur firebase
- Faire une publication locale avec hugo
- Remplacer dans tout le dossier public tous les liens localhost par le lien public
- Faire firebase deploy

Exemples de sites perso Hugo
- https://alpopkes.com/ (thème Toha https://github.com/hugo-toha/toha pour faire les portfolio perso)
- https://vickiboykis.com/    (https://github.com/veekaybee/veekaybee.github.io/tree/main)