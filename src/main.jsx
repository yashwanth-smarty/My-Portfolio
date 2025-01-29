import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Your main App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Set basename to match GitHub Pages subdirectory */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
