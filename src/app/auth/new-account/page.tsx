import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';
import Link from 'next/link';

export default function NewAccountPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className='bg-white px-14 py-8 rounded-md max-w-[500px] w-full'>
        <div className="text-xl mb-4 hover:text-naranja">

          <Link href="/">
            <span className={`${titleFont.className} font-bold`}>
              Teslo
            </span>
            <span className=' font-serif'> | Shop</span>
          </Link>
        </div>
        <h1 className={`${titleFont.className} text-4xl mb-8 text-center`}>Nueva cuenta</h1>

        <RegisterForm />
      </div>
    </div>
  );
}