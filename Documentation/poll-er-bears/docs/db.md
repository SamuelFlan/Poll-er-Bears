# Base de données

## Structure d'un poll
​
Un poll est un objet JSON. Il est composé de la façon suivante:
```
{
	"_id": "BQMeDeN6yE4k7SYPD",

	"createdAt": "Date Wed Feb 05 2020 08:10:54 GMT+0100 (Central European Standard Time)",
​​​
	newPoll: {	
		choices: (3) [ 
			0: Object { text: "Pizza", votes: 3 }
			1: Object { text: "Tacos", votes: 0 }
			2: Object { text: "Cerf-volant", votes: 6 }
		],
		"question": "On mange quoi ce midi?",
		owner: "ANXwWfowSzKmdgE53"
	}
​​}
​
```

Il est possible de récupérer les polls avec la commande `Polls.find().fetch()`.

## Utilisateurs

Les utilisateurs sont gérés avec le package [accounts](https://docs.meteor.com/api/accounts.html) de meteor. 

