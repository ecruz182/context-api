import './App.css';
import AppRouter from './routing/AppRouter';
import { Context } from './context/Context';
import  {  useEffect , useState } from 'react' ;  


function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("useEffect lanzado por primera vez");
    let user_local = JSON.parse(localStorage.getItem("user"));
    setUser(user_local);
  }, []);

  useEffect(() => {
    console.log("Este es un cambio de user");
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <AppRouter/>
      </Context.Provider>
    </div>
  );
}

export default App;
