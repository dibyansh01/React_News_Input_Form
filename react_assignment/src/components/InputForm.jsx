
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwpyaQqcyZ-RXhckGZ_7YTIPfQoLTUGeg",
  authDomain: "dp-first-e6532.firebaseapp.com",
  projectId: "dp-first-e6532",
  storageBucket: "dp-first-e6532.appspot.com",
  messagingSenderId: "224758378576",
  appId: "1:224758378576:web:ff7c9d73545d279d462155",
  measurementId: "G-3HTP7GDQ5V"
};


const app = initializeApp(firebaseConfig);

const InputForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

 
  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNumeric(id)) {
      console.error('ID must be numeric');
      return;
    }

    
    const db = getFirestore(app);

    try {
      
      const docRef = await addDoc(collection(db, 'list'), {
        id: parseInt(id), 
        name,
      });

     
      console.log('Document written with ID: ', docRef.id);

      
      setId('');
      setName('');
    } catch (error) {

      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => {
      
              if (isNumeric(e.target.value) || e.target.value === '') {
                setId(e.target.value);
              }
            }}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;