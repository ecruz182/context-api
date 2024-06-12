import './App.css';
import AppRouter from './routing/AppRouter';
import { Context } from './context/Context';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({
    id: 100,
    username: '@Edwin',
    name: 'Edwin',
    last_name: 'Cruz',
    phone: '3102558877',
    city: 'Bogota'
  });

  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <AppRouter/>
      </Context.Provider>
    </div>
  );
}

export default App;
