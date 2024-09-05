import React from 'react'
import { ArrowRight } from 'lucide-react';




const Button = ({ variant, children, onClick }) => {
    let className = '';
    let icon = null;

  switch (variant) {
    case 'filled':
      className = 'py-[12px] px-[10px] text-[16px] text-light bg-bold rounded-[10px] cursor-pointer';
      break;
    case 'outline':
      className = 'py-[10px] px-[25px] text-[16px] text-bold bg-light border-bold border rounded-[10px] cursor-pointer flex items-center space-x-1 font-semibold hover:bg-accent hover:text-light transition';
      break;
    case 'text':
      className = 'py-[10px] px-[10px] text-[16px] text-bold underline flex items-center cursor-pointer';
      icon = <ArrowRight className="ml-[4px]" size={"16px"} />;
      break;
    case 'textwhite':
      className = 'py-[10px] text-[16px] text-light underline flex items-center cursor-pointer';
      icon = <ArrowRight className="ml-[4px]" size={"16px"} />;
      break;
    default:
      className = 'btn-default';
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
      {icon}
    </button>
  )
}

export default Button