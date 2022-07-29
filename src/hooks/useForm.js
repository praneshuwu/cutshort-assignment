import { useState } from 'react';

const useForm = () => {
  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = ( name, value) => {
    //A function to validate each input value

    switch (name) {
      case 'fullName':
        if (value.length === 0) {
          //set the error state
          setErrors({
            ...errors,
            fullName: 'Full name cannot be empty',
          });
        } else {
          //set the error state empty or remove the error for username input
          setErrors({ ...errors, fullName: null });
        }
        break;
      case 'displayName':
        if (value.length < 5) {
          setErrors({
            ...errors,
            displayName: 'Display name needs to have atleast have 5 characters',
          });
        } else {
          setErrors({ ...errors, displayName: null });
        }
        break;
      case 'workspaceName':
          if (value.length<3) {
            setErrors({
              ...errors,
              workspaceName: 'Workspace name needs to have atleast have 3 characters',
            });
          } else {
            setErrors({ ...errors, workspaceName: null });
          }
          break;
      case 'workspaceURL':

          if (value.length<5) {
            setErrors({
              ...errors,
              workspaceURL: 'Workspace URL needs to have atleast have 5 characters',
            });
          } else {
            setErrors({ ...errors, workspaceURL: null });
          }
          break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    validate(name,value);

    //Set these values in state
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
