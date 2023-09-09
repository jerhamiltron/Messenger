import { IconType } from 'react-icons';

const AuthSocialButton = ({ Icon, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sky-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-offset-0'
    >
      <Icon className='h-5 w-5' />
    </button>
  );
};

export default AuthSocialButton;
