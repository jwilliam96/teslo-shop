export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getPaginatedOrders, getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductImage, Title } from "@/components";
import { currencyFormat } from "@/utils";

import Link from "next/link";
// import { redirect } from "next/navigation";
// import { IoCardOutline } from "react-icons/io5";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function OrdersPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  return (
    <>
      <Title title="Mantenimiento de productos" />

      <div className="flex justify-end pr-8 mb-5">
        <Link href="/admin/product/new" className="btn-primary">
          Nuevo producto
        </Link>
      </div>

      {/* PRODUCTOS  */}
      <div className="mb-10">
        <table className=" w-full">

          {/* ENCABEZADO TABLA  */}
          <thead className="bg-gray-200 border-b">
            <tr className="bg-white">
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Titulo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left hidden md:table-cell"
              >
                Precio
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left hidden lg:table-cell"
              >
                Género
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left hidden lg:table-cell"
              >
                Inventario
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left hidden lg:table-cell"
              >
                Tallas
              </th>
            </tr>
          </thead>

          {/* PRODUCTOS  */}

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                {/* IMAGEN  */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex justify-center">
                    <ProductImage
                      src={product.ProductImage[0]?.url}
                      width={80}
                      height={80}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                </td>

                {/* TITULO */}
                <td className="text-sm text-gray-900 font-light px-6 py-4 md:whitespace-nowrap underline md:no-underline">
                  <Link
                    href={`/admin/product/${product.slug}`}
                    className="hover:underline"
                  >
                    {product.title}
                  </Link>
                </td>

                {/* PRECIO  */}
                <td className="text-sm font-bold  text-gray-900 px-6 py-4 whitespace-nowrap hidden md:table-cell">
                  {currencyFormat(product.price)}
                </td>

                {/* GENERO  */}
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  {product.gender}
                </td>

                {/* INVENTARIO  */}
                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  {product.inStock}
                </td>

                {/* TALLA  */}
                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  {product.sizes.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} />
      </div >
    </>
  );
}
