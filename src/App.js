import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/textarea';
import Alert from './components/Alert'


function App() {
  const [mode, SetdarkMode]=useState("light");
  const [alert, Setalert]=useState(null);

  const Showalert=(message,type)=>{
    Setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      Setalert(null);
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      SetdarkMode('dark');
      document.body.style.backgroundColor='#252e36';
      Showalert("🌒 Dark mode have been enabled!",'success');
    }else{
      SetdarkMode('light');
      document.body.style.backgroundColor='white';
      Showalert("☀️ Light mode have been enabled!",'primary');

    }
  }


  return (
    <>
    <Navbar title="Text Utilization" align="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textarea heading="Enter text to Analyze" mode={mode} Showalert={Showalert}/>
    </>
  );
}

export default App;
