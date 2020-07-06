import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// add render routes function
import {renderRouters} from "../imports/startup/client/routes";

Meteor.startup(() => {
  render(renderRouters(), document.getElementById('target'));
});
