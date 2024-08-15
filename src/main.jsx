import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import FadeLoader from "react-spinners/FadeLoader";
import { createRoot } from 'react-dom/client';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, []);

  return (
    <React.StrictMode>
      {
        
        loading?
        <div className='center'>
          <FadeLoader
            color="#FF6B00"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        : <App />
      }
      
    </React.StrictMode>
  );
};
const root = createRoot(document.getElementById('root')); 
root.render(<Root />);
//ReactDOM.render(<Root />, document.getElementById('root'));
