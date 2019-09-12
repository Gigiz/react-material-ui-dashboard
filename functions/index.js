const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const { createUserProfile } = require('./authentication/onCreateUser');
const { retrieveUserRooms } = require('./rooms/rooms');

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createUserProfile),
  retrieveUserRooms: functions.https.onCall(retrieveUserRooms),
};
