import React from 'react';

const Button = ({ onClick, children,disabled }) => {
  return <button className='bg-[#664de5] text-white rounded-md w-full py-3 mt-7 hover:shadow-md disabled:bg-slate-200 disabled:text-white' onClick={onClick} disabled={disabled}>{children}</button>;
};

export default Button;
