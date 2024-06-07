"use client";

import { useFormState, useFormStatus } from "react-dom";
import { RiInformationFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import { authenticate, gitHubAuth, googleAuth } from "@/actions";
import { useEffect } from 'react';
import Link from "next/link";
import clsx from 'clsx';

// import { useRouter } from 'next/navigation';

export const LoginForm = () => {

  // const router = useRouter();
  const [state, dispatch] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === 'Success') {
      // redireccionar
      // router.replace('/');
      window.location.replace('/');
    }

  }, [state]);

  const google = async () => {
    await googleAuth()
  }

  const gitHub = async () => {
    await gitHubAuth()
  }

  return (
    <form action={dispatch} className="flex flex-col ">
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="emailSigIn">Correo electrónico</label>
        <input
          id="emailSigIn"
          className="px-5 py-2 border border-gray-400 rounded "
          type="email"
          name="email"
        />

        <label htmlFor="passwordSigIn">Contraseña </label>
        <input
          id="passwordSigIn"
          className="px-5 py-2 border border-gray-400 rounded"
          type="password"
          name="password"
        />
      </div>

      <div
        className="flex my-2"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <div className="flex items-center gap-3 flex-row my-2 text-red-500">
            <RiInformationFill size={25} />
            <p className="text-sm ">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>

      <LoginButton />
      {/* <button type="submit" className="btn-primary">
        Ingresar
      </button> */}

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      {/* PROVIDERS  */}
      <div className="flex gap-4 mb-8">
        <div
          onClick={google}
          className="flex items-center justify-center py-2 gap-2 border border-gray-400 bg-slate-100 w-full rounded-lg shadow-2xl cursor-pointer hover:scale-105">
          <FcGoogle size={25} />
          <span className="ss:text-xl font-bold text-gray-600"> Google</span>
        </div>

        <div
          onClick={gitHub}
          className="flex items-center justify-center gap-2 py-2 text-white bg-black w-full rounded-lg shadow-2xl cursor-pointer hover:scale-105">
          <IoLogoGithub size={25} />
          <span className="ss:text-xl font-bold text-white text-center"> GitHub</span>
        </div>
      </div>

      <div className=" flex flex-col ss:flex-row justify-between text-center">
        <span>Eres nuevo?</span>
        <Link href="/auth/new-account" className="mb-4 text-blue-500 hover:text-naranja hover:underline">
          Crear una nueva cuenta
        </Link>
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx({
        "bg-black text-white py-3 rounded-md ": !pending,
        "btn-disabled": pending
      })}
      disabled={pending}
    >
      Ingresar
    </button>
  );
}
