const functions = require('firebase-functions/v1')
const admin = require('firebase-admin')

var serviceAccount = require('./firebasekey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/**
 * Cloud Function triggered when a new Firebase Authentication user is created.
 */
exports.onUserCreate = functions.auth.user().onCreate(async user => {
  functions.logger.log('New user signed up!', {
    uid: user.uid,
    email: user.email, // Note: Email might be null for anonymous or phone auth users
    displayName: user.displayName, // Often null initially
    creationTime: user.metadata.creationTime
  })

  const db = admin.firestore()
  const userRef = db.collection('users').doc(user.uid) // Use UID as document ID

  try {
    await userRef.set({
      email: user.email || null, // Store email if available
      displayName: user.displayName || `User_${user.uid.substring(0, 5)}`, // Provide a default display name
      createdAt: admin.firestore.FieldValue.serverTimestamp(), // Use server timestamp for creation time
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      uid: user.uid
    })
    functions.logger.log(`Successfully created Firestore profile for user ${user.uid}`)
  } catch (error) {
    functions.logger.error(`Error creating Firestore profile for user ${user.uid}:`, error)
  }

  return null
})
