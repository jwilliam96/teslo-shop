export const revalidate = 60; // 60 segundos

import { Pagination, ProductGrid, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';
import imageDesktop from "../../../public/imgs/desktop.webp"
import imageMobile from "../../../public/imgs/mobile.webp"
import { compraFont } from '@/config/fonts';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {


  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <div className='flex-col'>

      {/* HEADER  IMAGE DESKTOP*/}
      <div className='hidden  h-[550px] 3xl:h-[700px] md:flex justify-center items-center relative'>
        <Image className='object-cover absolute inset-0 h-full w-full' src={imageDesktop} alt='un hombre y una mujer' priority />
        <Link href="#tienda" className={`text-white text-xl underline font-serif mt-24 hover:text-naranja cursor-pointer relative`} >COMPRA AHORA</Link>
      </div>

      {/* IMAGE MOBILE  */}
      <div className='md:hidden h-[500px] 3xl:h-[700px] flex justify-center items-center relative'>
        <Image className='object-cover w-full h-full' src={imageMobile} alt='un hombre y una mujer' sizes='100vw' priority />
      </div>


      <p className={`text-center bg-zinc-400 py-2 ${compraFont.className}`}>ENVÍOS GRATIS A TODO EL MUNDO</p>


      <div className='2xl:w-3/4 m-auto ' >
        <Title
          id='tienda'
          title="Tienda"
          subtitle="Todos los productos"
          className="mb-2 "
        />

        <ProductGrid
          products={products}
        />

        <Pagination totalPages={totalPages} />
      </div>

    </div>
  );
}
