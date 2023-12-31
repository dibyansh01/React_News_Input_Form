
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwpyaQqcyZ-RXhckGZ_7YTIPfQoLTUGeg",
  authDomain: "dp-first-e6532.firebaseapp.com",
  projectId: "dp-first-e6532",
  storageBucket: "dp-first-e6532.appspot.com",
  messagingSenderId: "224758378576",
  appId: "1:224758378576:web:ff7c9d73545d279d462155",
  measurementId: "G-3HTP7GDQ5V"
};

// Initializing Firebase once in your application
const app = initializeApp(firebaseConfig);

const SavedList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Getting a reference to the Firestore database
    const db = getFirestore(app);

    // Reference to the 'list' collection
    const listCollection = collection(db, 'list');

    // Listening for changes to the 'list' collection
    const unsubscribe = onSnapshot(listCollection, (querySnapshot) => {
      const listData = [];
      querySnapshot.forEach((doc) => {
        listData.push(doc.data());
      });
      setList(listData);
    });

    return () => {
      // Unsubscribing from Firestore updates when component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div className="centered-container">
      <h2> List</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <strong>ID:</strong> {item.id}, <strong>Name:</strong> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedList;
