import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../collections/polls.js';
import './components/poll-form.js';
import './components/poll.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Template.body.helpers({
	polls: function() {
		return Polls.find();
	}
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});
