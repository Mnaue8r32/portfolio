import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AppPreferencesProvider } from './context/AppPreferencesContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppPreferencesProvider>
      <App />
    </AppPreferencesProvider>
  </StrictMode>,
);
