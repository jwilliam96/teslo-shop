import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from './ui/PlaceOrder';
import { Title } from "@/components";
import Link from "next/link";


export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-32 px-10 ">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
