import './poll-form.html';

Template.pollForm.events({
	'submit .ajout'(event) { //handle the form submission
		event.preventDefault(); //stop the form from submitting

		var newPoll = { //get the data we need from the form
			question: event.target.question.value,
			choices: [
				{  text: event.target.choice1.value, votes: 0 },
				{  text: event.target.choice2.value, votes: 0 },
				{  text: event.target.choice3.value, votes: 0 }
			]
		};
		Polls.insert(newPoll); //create the new poll
	}
});