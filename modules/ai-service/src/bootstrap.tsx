import React from 'react';
import ReactDOM from 'react-dom/client';
import AITutor from './components/AITutor';

// For standalone testing
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div style={{ background: '#030712', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ color: 'white' }}>AI Service Preview</h1>
      <AITutor />
    </div>
  </React.StrictMode>
);
