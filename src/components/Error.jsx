import React from 'react'

const Error = ({children}) => {
  return (
    <p className='text-sm text-red-400 ml-1'>{children}</p>
  )
}

export default Error