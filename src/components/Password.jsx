import React from 'react'
import ValidPassword from './ValidPassword'
import InvalidPassword from './InvalidPassword'

const Password = (props) => {
//   if(props.isvalid) {
//     return <ValidPassword/>
//   }
//   return <InvalidPassword/>

 return (props.isValid ? <ValidPassword /> : <InvalidPassword/>)
}

export default Password