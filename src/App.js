import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/textarea';



function App() {
  const [mode, SetdarkMode]=useState("light");

  const toggleMode=()=>{
    if(mode==='light'){
      SetdarkMode('dark');
      document.body.style.backgroundColor='#252e36';
    }else{
      SetdarkMode('light');
      document.body.style.backgroundColor='white';

    }
  }


  return (
    <>
    <Navbar title="Text Utilization" align="About" mode={mode} toggleMode={toggleMode}/>
    <Textarea heading="Enter text to Analyze" mode={mode}/>
    </>
  );
}

export default App;
