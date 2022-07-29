import { useState,createContext } from 'react';
import './App.css';
import logo from './assets/eden_logo.png';
import Stages from './components/Stages';
import CombinedForm from './forms/CombinedForm';

export const StageContext = createContext(null);
function App() {
  const [progress, setProgress] = useState({ progressBar: 20, stage: 1 });

  const progressValue = { progress, setProgress };


  return (
    <StageContext.Provider value={progressValue}>

        <div className='App bg-white h-screen flex content-center justify-center'>
          <div className='w-full md:w-3/4'>
            <img src={logo} alt='Logo' className='mx-auto w-60' />
            <Stages progress={progress.progressBar} />
            <CombinedForm />
          </div>
        </div>

    </StageContext.Provider>
  );
}

export default App;
