import { Meteor } from 'meteor/meteor';

import './poll.html';

Template.poll.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

// attach events to our poll template
Template.poll.events({
	// event to handle clicking a choice
	'click .vote'(event) {
		// prevent the default behavior
		event.preventDefault();

		// get the parent (poll) id
		var pollID = $(event.currentTarget).parent('.poll').data('id');
		var voteID = $(event.currentTarget).data('id');

		// create the incrementing object so we can add to the corresponding vote
		var voteString = 'newPoll.choices.' + voteID + '.votes';
		var action = {};
		action[voteString] = 1;

		// increment the number of votes for this choice
		Polls.update(
		{ _id: pollID }, 
		{ $inc: action }
		);
	},
	
	'click .delete'(event) {
		event.preventDefault();
		
		var pollID = $(event.currentTarget).parent('.head_poll').parent('.poll').data('id');
		Polls.remove(pollID);
	}
});