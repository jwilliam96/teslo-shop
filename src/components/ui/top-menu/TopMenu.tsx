"use client";
import { useCartStore, useUIStore } from "@/store";
import { GoTriangleDown } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import { titleFont } from "@/config/fonts";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";
import useMenu from "../sidebar/useMenu";

export const TopMenu = () => {

  // const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const genders = [{ gender: "Hombre", url: "men" }, { gender: "Mujer", url: "women" }, { gender: "Niño", url: "kid" }]

  const [onSelect, setOnSelect] = useState(false)
  const selectOption = [
    { gender: "Todo", url: "/" },
    { gender: "Hombre", url: "/gender/men" },
    { gender: "Mujer", url: "/gender/women" },
    { gender: "Niño", url: "/gender/kid" }]
  const pathName = usePathname()
  const [isSelect, setIsSelect] = useState("Todo")

  useEffect(() => {
    selectOption.map(option => {
      if (pathName == option.url) {
        setIsSelect(option.gender)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])


  const { openSideMenu } = useMenu(true)



  const [loaded, setLoaded] = useState(false);
  const params = useParams()

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <div className="bg-fondo-topMenu text-slate-50  py-4 px-4 sticky top-0 right-0 left-0 z-20">
      <nav className="flex  justify-between items-center max-w-[1200px] m-auto">
        {/* Logo */}
        <div className="text-xl ss:text-3xl">
          <Link href="/">
            <span className={`${titleFont.className} antialiased font-bold`}>
              Teslo
            </span>
            <span className='ss:text-2xl font-serif'> | Shop</span>
          </Link>
        </div>

        {/* Gender menu */}
        <div className="hidden sm:block">
          {
            genders.map(gender => (
              <Link
                className={clsx("m-2 p-2 font-serif font-bold text-xl rounded-md transition-all hover:text-naranja",
                  params.gender === gender.url && "text-naranja underline"
                )}
                key={gender.url}
                href={`/gender/${gender.url}`}>
                <span className="capitalize">{gender.gender}</span>
              </Link>
            ))
          }
        </div>

        {/* Select, Cart, Menu */}

        <div className="flex items-center relative ">

          {/* SELECT MOBILE */}
          <div className="w-[80px] md:hidden" >
            <div
              onClick={() => setOnSelect(!onSelect)}
              className=" bg-fondo-topMenu border px-2 py-1 flex items-center justify-between  rounded-lg cursor-pointer "
            >{isSelect} <GoTriangleDown size={20} /></div>

            <div className={clsx("bg-fondo-topMenu border px-2 py-1 rounded-lg cursor-pointer absolute",
              onSelect ? " flex flex-col" : "hidden"
            )}>
              {
                selectOption.map(option => (
                  <Link
                    key={option.gender}
                    href={option.url}
                    className="cursor-pointer"
                    onClick={() => setOnSelect(false)}
                  >
                    {option.gender}</Link>
                ))
              }
            </div>
          </div>

          {/* CART, MENU  */}
          <Link href={
            ((totalItemsInCart === 0) && loaded)
              ? '/empty'
              : "/cart"
          } className="mx-2">
            <div className="relative">
              {(loaded && totalItemsInCart > 0) && (
                <span className="fade-in absolute  text-xs px-1.5 py-0.5 rounded-full font-bold -top-2 -right-2 bg-[#EA5823] text-white">
                  {totalItemsInCart}
                </span>
              )}
              <IoCartOutline className="" size={30} />
            </div>
          </Link>


          <MdMenu onClick={openSideMenu} className="m-2 cursor-pointer rounded-md transition-all hover:bg-naranja" size={30} />
        </div>
      </nav >
    </div>
  );
};
