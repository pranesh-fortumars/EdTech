import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div style={{ background: '#030712', minHeight: '100vh', color: 'white', padding: '2rem' }}>
       <App />
    </div>
  </React.StrictMode>
);
