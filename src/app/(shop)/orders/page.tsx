// export const revalidate = 0;
export const dynamic = 'force-dynamic'

// https://tailwindcomponents.com/component/hoverable-table
import { getOrdersByUser } from "@/actions";
import { Title } from "@/components";
import clsx from "clsx";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline, IoTicketOutline } from "react-icons/io5";

export default async function OrdersPage() {


  const { ok, orders = [] } = await getOrdersByUser();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <div className={clsx("grow max-w-[1200px] w-full mx-auto px-2 ",
      orders.length === 0 && "flex items-center justify-center"
    )}>

      {
        orders.length === 0 ? (
          <div className=" flex justify-center items-center gap-5 my-28">

            <IoTicketOutline size={80} />

            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold">
                No hay ordenes
              </h1>

              <Link
                href='/'
                className="text-naranja mt-2 text-4xl"
              >
                Regresar
              </Link>

            </div>


          </div>
        )
          : (
            <div className="mb-10">
              <Title title="Orders" />
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 sm:px-6 px-2 py-4 text-left"
                    >
                      #ID
                    </th>
                    <th
                      scope="col"
                      className="hidden sm:block text-sm font-medium text-gray-900 sm:px-6 px-2 py-4 text-left"
                    >
                      Nombre completo
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 sm:px-6 px-2 py-4 text-left"
                    >
                      Estado
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 sm:px-6 px-2 py-4 text-left"
                    >
                      Opciones
                    </th>
                  </tr >
                </thead >
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="sm:px-6 px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id.split("-").at(-1)}
                      </td>
                      <td className="hidden sm:table-cell text-sm text-gray-900 font-light sm:px-6 px-2 py-4 whitespace-nowrap">
                        {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                      </td>
                      <td className="flex flex-wrap justify-center ss:justify-start items-center text-sm  text-gray-900 font-light sm:px-6 px-2 py-4 whitespace-nowrap">
                        {order.isPaid ? (
                          <>
                            <IoCardOutline className="text-green-800" />
                            <span className="mx-2 text-green-800">Pagada</span>
                          </>
                        ) : (
                          <>
                            <IoCardOutline className="text-red-800" />
                            <span className="mx-2 text-red-800">No Pagada</span>
                          </>
                        )}
                      </td>
                      <td className="text-sm text-gray-900 font-light sm:px-6 px-2 ">
                        <Link href={`/orders/${order.id}`} className="hover:underline">
                          Ver orden
                        </Link>
                      </td>
                    </tr>
                  ))}


                </tbody>
              </table >
            </div >
          )
      }

    </div>
  );
}
