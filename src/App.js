
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import { BrowserRouter as  Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";




function App() {
  const[mode , setMode]=useState('light');
  const [alert ,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
     showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light')  
      document.body.style.backgroundColor='white';
      
      showAlert("Light mode is enabled","success");
    }
  }
  return (
<>                     

<Router>
  {/* <Navbar title="textutils" AboutText="Changing About" mode={mode}/> */}
  <Navbar title="textutils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Switch> */}
  <Route path="/about" element={<About/>} />
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
           <TextForm heading="Enter the Text to analyze below " mode={mode}/>
          </Route> */}
   {/* </Switch> */}
 

    {/* <About/> */}
  </div>
  </Router>
</>
);
}

export default App;
