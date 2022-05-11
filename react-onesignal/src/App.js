import logo from './logo.svg';
import './App.css';

import OneSignal from 'react-onesignal';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
    OneSignal.init({ appId: 'XX' });
  }, []);

  const onHandleTag = (tag) => {
    console.log('tagging');
    OneSignal.setExternalUserId(2);
    //await OneSignal.getUserId();
    OneSignal.sendTag('tech', tag).then( ()=>{
      console.log('tagged')
    });
  }

  const sendMessage = (msg, id) => {
   console.log(msg, id)
  
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing <code>OneSignal</code> push notifications.
        </p>

        <button 
          type="button" 
          className="btn btn-primary btn-lg"
          onClick={()=>onHandleTag("botao1")}
        >
          Botão 1
        </button>

        <button 
          type="button" 
          className="btn btn-success btn-lg"
          onClick={()=>onHandleTag("botao2")}
        >
          Botão 2
        </button>

        <button 
          type="button" 
          className="btn btn-secondary btn-lg"
          onClick={()=>sendMessage("botao2", "id")}
        >
          Notificação
        </button>

      </header>
    </div>
  );
}

export default App;
