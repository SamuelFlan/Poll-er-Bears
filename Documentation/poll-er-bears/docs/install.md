# Installation

Téléchargez le dossier complet. Il aura l'arborescence suivante: 
```
Poll-er-Bears/
	Documentation/   # Le dossier de la documentation
		... 
	strawpoll/		 # le projet
		client/
		collections/
		...
```

## Pré-requis

Avoir installé node.js et meteor. 

## Initialisation et packages

Dans le dossier `Poll-er-Bears`:

* Réinstallation du .meteor : `meteor create strawpoll` 

Puis dans le dossier `strawpoll`:

* Installation du package underscore `meteor add underscore`
* Téléchargement de bootstrap `meteor npm install --save bootstrap jquery popper.js`
* Installation de Font Awesome `npm install --save @fortawesome/fontawesome-free
`
* Installation du package pour le login `meteor add accounts-ui accounts-password`

