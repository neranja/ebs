import React from 'react';

import { useFormikContext } from 'formik';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';

function AppFormFild({name,...otherProps}) {
    const {handleChange,handleSubmit,errors,setFieldTouched,touched}=useFormikContext();
    return (
        <>
        <AppTextInput
        // icon="email"
         onChangeText={handleChange(name)}
         onBlur={()=>setFieldTouched(name)}
         {...otherProps}
        // placeholder="Username"
         />
         <ErrorMessage error={errors[name]} visible={touched[name]}/>
         
        </>
    );
}

export default AppFormFild;