const admin = require('firebase-admin');

const firestore = admin.firestore();

const createUserProfile = (userRecord, context) => {
  const { uid, email, displayName } = userRecord;

  return firestore
    .collection('users')
    .doc(uid)
    .set({
      email,
      displayName,
      registrationDate: new Date(),
      rooms: []
    })
    .catch(console.error);
};

module.exports = {
  createUserProfile,
};
