import React from 'react';
import Button from '../components/Button';
import Error from '../components/Error';
import useForm from '../hooks/useForm';


const WorkspaceForm = ({submitHandler}) => {


  const {handleChange, values,errors } = useForm();

  let buttonState = errors.workspaceName || errors.workspaceURL || !values.workspaceName || !values.workspaceURL;

    
  return (
    <div className='text-center mt-9 w-5/6 mx-auto'>
      <h3 className='heading'>Let's set up a home for all your work</h3>
      <p className='description'>You can always create another later</p>
      <div className='flex flex-col text-left pt-7'>
        <label htmlFor='workspaceName' className='py-2'>Workspace Name</label>
        <input
          type='text'
          className='border-[1px] border-slate-300 bg-white rounded-md p-3'
          placeholder='Workspace Name'
          name='workspaceName'
          onChange={handleChange}
        />
        {errors.workspaceName && <Error>{errors.workspaceName}</Error>}

      </div>
      <div className='flex flex-col text-left pt-5'>
        <label htmlFor='workspaceUrl' className='py-2'>Workspace URL <span className='text-gray-300'>(optional)</span></label>
        <div className='w-full flex'>
            <label className='border-[1px] border-slate-300 border-r-0 bg-gray-100 rounded-l-md p-3 text-slate-400 font-thin text-md'>www.eden.com/</label>
        <input
          type='text'
          className='flex-1 border-[1px] border-slate-300 bg-white rounded-r-md p-3'
          placeholder='Example'
          name='workspaceURL'
          onChange={handleChange}
        />
        </div>
        {errors.workspaceURL && <Error>{errors.workspaceURL}</Error>}

      </div>
      <Button className='bg-[#664de5] text-white rounded-md w-full py-3 mt-7' onClick={submitHandler} disabled={buttonState}>Create Workspace</Button>
    </div>
  );
};

export default WorkspaceForm;
