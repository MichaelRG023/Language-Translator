import React from "react";
import{Routes,Route,useNavigate} from "react-router-dom";
import Translator from "./Translator/Translator";

function App() {
  const  navigate = useNavigate();

  const navigateToContacts =()=>{
      navigate('/Translator', {replace: true });
  }
  return (
    <div className="app">
    <div>
        <h1>Translator for You</h1>
         <section>
            <p>Welcome to translator app, a translator app powered by MicroSoft Text Translator api where it can translate english words into 5 different languages.</p>
        </section>
        <button onClick={navigateToContacts}>Begin Translating</button>

        <Routes>
            <Route path="/Translator" element={<Translator/>}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
