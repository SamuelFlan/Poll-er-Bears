
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';
import '../collections/polls.js';
import './components/poll-form.js';
import './components/poll.js';
import './components/account-config.js';

Template.body.helpers({
	polls: function() {
		return Polls.find();
	},
	
	isAdmin() {
		if(Meteor.user()!=null)
			return Meteor.user().username === "Admin";
	},
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});

Template.body.events({
	'click .drop'(event) {
		event.preventDefault();
		
		var data = Polls.find({});
		data.forEach((poll) => {
			Polls.remove(poll._id);
		});
	}
});
