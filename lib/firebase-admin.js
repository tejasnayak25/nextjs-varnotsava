import * as admin from 'firebase-admin';
// import * as client from '@/lib/firebase-client';

const firebaseAdminConfig = JSON.parse(process.env.FIREBASE_ADMIN);

let app = admin.apps.find(item => {return item.name === "varnotsava"}) ? admin.apps.find(item => {return item.name === "varnotsava"}) :  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig)
}, "varnotsava");

let firestore = app.firestore();

// let storage = app.storage();
// let bucket = storage.bucket(client.firebaseConfig);

export const fbaseAdmin = admin;

export function collection (model) {
    let reqModel = new model();
    return firestore.collection(reqModel.name);
}

export async function upload (path, destination) {
    return bucket.upload(path, {
        destination: destination
    });
}