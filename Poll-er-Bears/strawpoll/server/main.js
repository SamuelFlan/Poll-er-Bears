import { Meteor } from 'meteor/meteor';

import '../collections/polls.js';

Meteor.startup(function() {
	// code to run on server at startup
	// if there are no polls available create sample data
	if (Polls.find().count() === 0) {
		// create sample polls
		var samplePolls = [
			{
				question: 'Is Meteor awesome?',
				choices: [
					{ text: 'Of course!', votes: 0 },
					{ text: 'Eh', votes: 0 },
					{ text: 'No. I like plain JS', votes: 0 }
				]
			},
			{
				question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
				choices: [
					{ text: '100% yes', votes: 0 },
					{ text: '200% yes', votes: 0 },
					{ text: '300% yes', votes: 0 }
				]
			}
		];

		// loop over each sample poll and insert into database
		_.each(samplePolls, function(poll) {
			Polls.insert(poll);
		});
	}
	
	if (Meteor.users.find({username:"Admin"}).fetch().length==0) {
	Accounts.createUser({
		username: 'Admin',
		password:'C1drol2mdp!',
	});
	}
});