import React, {useState} from "react";
import './App.css';
import Liste from "./components/Liste";
import Footer from "./components/Footer";

function App() {  

  const [status, setStatus] = useState('gato');

  return (
    <div>
      <header>
   <h1 className="header">Recette dou couizine</h1>
   </header>
<Liste 
  setStatus={setStatus}/>
  <Footer />
    </div>
  );
}

export default App;
