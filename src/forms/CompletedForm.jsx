import React from 'react'
import checkmark from '../assets/checkmark.svg'
import Button from '../components/Button'
const CompletedForm = () => {
  return (
    <div className='w-5/6 md:w-full mx-auto flex flex-col items-center justify-end text-center'>
        <img src={checkmark} alt="Completed" className='pt-14'/>

        <div className='pt-9'>
            <h3 className='heading'>Congratulations, Eren!</h3>
            <p className='description'>You have completed onboarding, you can start using Eden!</p>
        </div>
        <Button onClick={()=>{return;}}>Launch Eden</Button>
    </div>
  )
}

export default CompletedForm