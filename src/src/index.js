import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const doc = document.getElementById('root');
const root = createRoot(doc);

root.render(<App/>);
