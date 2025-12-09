import React from 'react';
import { auth } from './firebase'; // Import the auth object
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

function App() {
  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      // Force a full browser redirect for Termux compatibility
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Facebook Sign-In Error:", error);
      alert(`Login Failed: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My Life Dashboard</h1>
      {auth.currentUser ? (
        <div>
          <p>Welcome, {auth.currentUser.displayName}!</p>
          <button onClick={() => auth.signOut()}>Sign Out</button>
          {/* Dashboard Content will go here */}
        </div>
      ) : (
        <button onClick={signInWithFacebook} style={{ 
          backgroundColor: '#3b5998', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Sign in with Facebook
        </button>
      )}
    </div>
  );
}

export default App;

