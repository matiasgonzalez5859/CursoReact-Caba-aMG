// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,  
    query,
    where
  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBhp79cxjl3ugWP-fBGVc1YiTICL-Xq2Q",
  authDomain: "cabanamg1.firebaseapp.com",
  projectId: "cabanamg1",
  storageBucket: "cabanamg1.appspot.com",
  messagingSenderId: "697722411515",
  appId: "1:697722411515:web:e9d7eec0670f900c31d35e",
  measurementId: "G-ZPCECZXPZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 0. Inicializamos Firestore
const DB = getFirestore(app);

//1. Traer todos los documentos
export default async function getItems() {
  //1.A Referenciamos nuestra colección
  const colectionProductsRef = collection(DB, "products");
  //1.B Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//2. Traer un documento por ID
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

//3. Traer todos los  documentos según categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(collectionRef, where("category", "==",categoryParams ))
  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData; 
}