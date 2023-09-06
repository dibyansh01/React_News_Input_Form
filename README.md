# React Firebase Input Form

This is a simple React application that allows users to submit News, such as Their ID, name and News article, using a web form. The submitted data is securely stored in a Firebase Firestore database.

## Features

- Input form for submitting data.
- Firebase Firestore integration for data storage.
- Validation to ensure only numeric values for the ID field.

## Prerequisites

Before running this application, you will need the following:

- Node.js and npm installed on your local machine.
- Firebase project and Firestore database set up. You can create a Firebase project at [Firebase Console](https://console.firebase.google.com/).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/dibyansh01/React_assignment
   cd react_assignment
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   Replace the Firebase configuration in src/components/InputForm.jsx and src/components/SavedList.jsx with your Firebase project configuration. You can find your Firebase configuration in the Firebase Console.
4. Start the development server locally:
   ```bash
   npm run dev
   ```

## Usage

- Fill out the input form with a numeric ID, name and news article.
- Click the "Submit" button to save the data to the Firebase Firestore database.

## Contributing

- Contributions are welcome! If you find a bug or have any suggestions, please open an issue or create a pull request.
