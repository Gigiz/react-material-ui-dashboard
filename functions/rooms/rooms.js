const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firestore = admin.firestore();

const retrieveUserRooms = (data, context) => {

  if (!context.auth.uid) {
    throw new functions.https.HttpsError('unauthorized', 'The function can be called only ' +
      'by authenticated users');
  }

  const userDocument = firestore
    .collection('users')
    .doc(context.auth.uid);

  return userDocument
    .get()
    .then(user => {
      if (!user) return [];
      const { rooms } = user.data();
      return rooms;
    })
};

module.exports = {
  retrieveUserRooms,
};
