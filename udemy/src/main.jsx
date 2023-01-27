import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './components/CounterApp';
import { FirstApp } from './components/FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FistApp name={'Bryan Muñoz'} subTitle={'Primera pagina web!'} title={'Hola Mundo'} /> */}
    <CounterApp value={14} />
  </React.StrictMode>
);
