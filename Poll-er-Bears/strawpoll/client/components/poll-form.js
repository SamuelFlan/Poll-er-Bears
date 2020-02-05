import { Meteor } from 'meteor/meteor';

import './poll-form.html';

Template.pollForm.helpers({
	isLog() {
		if (! Meteor.userId()) {
			return false;
		}
		return true;
	},
});

Template.pollForm.events({
	'submit .ajout'(event) { //handle the form submission
		event.preventDefault(); //stop the form from submitting
		
		// Make sure the user is logged in before inserting a task
		if (! Meteor.userId()) {
		  throw new Meteor.Error('not-authorized');
		}

		var newPoll = { //get the data we need from the form
			question: event.target.question.value,
			choices: [
				{  text: event.target.choice1.value, votes: 0 },
				{  text: event.target.choice2.value, votes: 0 },
				{  text: event.target.choice3.value, votes: 0 }
			]
		};
		Polls.insert({
			newPoll,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		}); //create the new poll
	}
});