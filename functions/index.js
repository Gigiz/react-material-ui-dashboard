const functions = require('firebase-functions');

const { createUserProfile } = require('./authentication/onCreateUser');

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createUserProfile),
};
