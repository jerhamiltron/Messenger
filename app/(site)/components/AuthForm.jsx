'use client';

import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import Input from "@/app/components/inputs/Input";

const Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action) => {
        setIsLoading(true);

        // NextAuth Social Sign In
    }

    return ( <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
       <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10' >
        <form className='space-y-6' onSubmit={() => handleSubmit(onSubmit)}>
            <Input />
        </form>
       </div>
    </div> );
}
 
export default AuthForm;