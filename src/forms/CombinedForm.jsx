import React, { useContext } from 'react';
import NameForm from './NameForm';
import { StageContext } from '../App';
import WorkspaceForm from './WorkspaceForm';
import UsageForm from './UsageForm';
import CompletedForm from './CompletedForm';

const CombinedForm = () => {
  const { progress, setProgress } = useContext(StageContext);

  const { progressBar, stage } = progress;

  const submitHandler = (event) => {
    event.preventDefault();

    if(stage>=4) return;
    if (stage < 3) {
      setProgress({
        stage: stage + 1,
        progressBar: progressBar + 30,
      });
    } else{
      setProgress({
        stage: stage + 1,
        progressBar: progressBar + 20,
      });
    }
  };

  return (
    <div className='w-1/2 mx-auto'>
      {progress.stage === 1 && <NameForm submitHandler={submitHandler} />}
      {progress.stage === 2 && <WorkspaceForm submitHandler={submitHandler} />}
      {progress.stage === 3 && <UsageForm submitHandler={submitHandler} />}
      {progress.stage === 4 && <CompletedForm submitHandler={submitHandler} />}
    </div>
  );
};

export default CombinedForm;
