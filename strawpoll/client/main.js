import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../collections/polls.js';
import './components/poll.html'
import './components/poll-form.html'

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
