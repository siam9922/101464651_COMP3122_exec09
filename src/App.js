import React from 'react';
import './App.css'; // Keep the CSS for any default styling
import PersonList from './components/PersonList'; // Import the PersonList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lab 11 - Axios Example</h1>
      </header>
      <main>
        <PersonList /> {/* Display the PersonList component */}
      </main>
    </div>
  );
}

export default App;
