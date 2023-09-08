'use client'

import clsx from "clsx";

const Input = ({label, id, type, required, register, errors, disabled}) => {
    return ( <div>
       <label htmlFor={id} className='block text-xm font-medium leading-6 text-gray-900'>
        {label}
       </label>
    </div> );
}
 
export default Input;