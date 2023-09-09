'use client';

import clsx from 'clsx';

const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'bg-sky-400 hover:bg-sky-400/70 rounded-md px-4 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-offset-0',
        fullWidth && 'w-full',
        danger && 'bg-rose-400/70 hover:bg-rose-400'
      )}
    >
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
