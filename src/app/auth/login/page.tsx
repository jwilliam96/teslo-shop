
import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className='bg-white px-8 ss:px-14 py-8 rounded-md max-w-[500px] w-full'>
        <div className="text-xl mb-4 hover:text-naranja">
          <Link href="/">
            <span className={`${titleFont.className} font-bold`}>
              Teslo
            </span>
            <span className=' font-serif'> | Shop</span>
          </Link>
        </div>
        <h1 className={`${titleFont.className} text-4xl mb-8 text-center`}>Ingresar</h1>

        <LoginForm />
      </div>
    </div>
  );
}