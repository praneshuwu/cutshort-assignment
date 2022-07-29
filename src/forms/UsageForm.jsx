import React, { useState } from 'react';
import individual from '../assets/individual.png';
import team from '../assets/team.png';
import Button from '../components/Button';



const UsageForm = ({ submitHandler }) => {
  const [activeUsage, setActiveUsage] = useState();

  const clickHandler = (activeDiv) => {
    setActiveUsage(activeDiv);
  };


  let buttonState = !activeUsage;

    
  
  

  return (
    <div className='text-center mt-9 w-5/6 mx-auto'>
      <h3 className='heading'>How are you planning to use Eden?</h3>
      <p className='description'>
        We'll streamline your setup experience accordingly
      </p>

      <div className='flex justify-between w-6/6 mt-9 mx-auto'>
        <div
          className={`usage-container ${activeUsage==='individual'? 'active': ''}`}
          onClick={()=>{clickHandler('individual')}}
          id='individual'
        >
          <img src={individual} alt='For myself' className='w-7 mb-3' />
          <h4 className='text-lg font-semibold mt-4'>For myself</h4>
          <p className='text-slate-300 text-sm mt-2'>
            Write better. Think more clearly. Stay organized.
          </p>
        </div>

        <div className={`usage-container ${activeUsage==='team'? 'active': ''}`} onClick={()=>{clickHandler('team')}} id='team'>
          <img src={team} alt='For a team' className='w-9' />
          <h4 className='text-lg font-semibold mt-2'>With my team</h4>
          <p className='text-slate-300 text-sm mt-2'>
            Wikis, docs, tasks & projects, all in one place
          </p>
        </div>
      </div>

      <Button onClick={submitHandler} disabled={buttonState}>Create Workspace</Button>
    </div>
  );
};

export default UsageForm;
