"use client";

import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '@/actions/auth/login';
import { registerUser } from '@/actions';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';



type FormInputs = {
  name: string;
  email: string;
  password: string;
}



export const RegisterForm = () => {

  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setErrorMessage('');
    const { name, email, password } = data;

    // Server action
    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }

    await login(email.toLowerCase(), password);
    window.location.replace('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

      <div className='flex flex-col gap-4 mb-4'>
        <label htmlFor="email">Nombre completo</label>
        <input
          className={
            clsx(
              "px-5 py-2 border border-gray-400 rounded",
              {
                'border-red-500': errors.name
              }
            )
          }
          type="text"
          autoFocus
          {...register('name', { required: true })}
        />
        {
          errors.name?.type === 'required' && (
            <span className="text-red-500">* El nombre es obligatorio</span>
          )
        }

        <label htmlFor="email">Correo electrónico</label>
        <input
          className={
            clsx(
              "px-5 py-2 border border-gray-400 rounded",
              {
                'border-red-500': errors.email
              }
            )
          }
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />

        <label htmlFor="email">Contraseña</label>
        <input
          className={
            clsx(
              "px-5 py-2 border border-gray-400 rounded",
              {
                'border-red-500': errors.password
              }
            )
          }
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />

        <span className="text-red-500">{errorMessage} </span>
      </div>

      <button className="bg-black text-white py-3 rounded-md">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <div className='flex justify-between'>
        <span>ya eres usuario?</span>
        <Link href="/auth/login" className="text-blue-500">
          Ingresar
        </Link>
      </div>
    </form>
  );
};
