import React from 'react';
import Button from '../components/Button';
import Error from '../components/Error';
import useForm from '../hooks/useForm';



const NameForm = ({ submitHandler }) => {

  const {handleChange, values,errors } = useForm();

  let buttonState = errors.displayName || errors.fullName || !values.fullName || !values.displayName;

  return (
    <div className='text-center mt-9 w-5/6 mx-auto'>
      <h3 className='heading'>Welcome! First things first...</h3>
      <p className='description'>You can always change them later</p>
      <div className='flex flex-col text-left pt-7'>
        <label htmlFor='fullName' className='py-2'>
          Full Name
        </label>
        <input
          type='text'
          className='border-[1px] border-slate-300 bg-white rounded-md p-3'
          placeholder='Full Name'
          name='fullName'
          onChange={handleChange}
        />
        {errors.fullName &&<Error>{errors.fullName}</Error>}
      </div>
      <div className='flex flex-col text-left pt-5'>
        <label htmlFor='displayName' className='py-2'>
          Display Name
        </label>
        <input
          type='text'
          className='border-[1px] border-slate-300 bg-white rounded-md p-3'
          placeholder='Display Name'
          name='displayName'
          onChange={handleChange}
        />
        {errors.displayName && <Error>{errors.displayName}</Error>}

      </div>
      <Button onClick={submitHandler} disabled={buttonState}>Create Workspace</Button>
    </div>
  );
};

export default NameForm;
