const gg = require ("../config.json");
const admin = require ("firebase-admin");
const fire = require("../firebase.json");
const fir = admin.initializeApp({
  credential: admin.credential.cert(fire),
  databaseURL: ""

})
const db = admin.firestore();
db.add = admin.firestore.FieldValue;
exports.db = db;
exports.fir = fir;
