export const revalidate = 60; // 60 segundos

import { Pagination, ProductGrid, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';
import { compraFont } from '@/config/fonts';
import { redirect } from 'next/navigation';
import Link from 'next/link';

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
      <div className='hidden  h-[550px] 3xl:h-[700px] bg-fondo-tesla bg-no-repeat bg-cover bg-center md:flex justify-center items-center'>
        <Link href="#tienda" className={`text-white text-xl underline font-serif mt-24 hover:text-naranja cursor-pointer`} >COMPRA AHORA</Link>
      </div>

      {/* IMAGE MOBILE  */}
      <div className='md:hidden  h-[500px] 3xl:h-[700px] bg-fondo-mobile bg-no-repeat bg-cover bg-center flex justify-center items-center' />


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
