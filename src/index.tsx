import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.st.css';
import App from './app';

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
