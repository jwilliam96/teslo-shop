"use client"

import { IoPeopleOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";
import Link from "next/link";
import useMenu from "../useMenu";

export function IsAdmin() {

    const { openSideMenu } = useMenu(false)


    return (
        <>
            {/* Line Separator */}
            <div className="w-full h-px bg-gray-200 my-2 mobile:my-4 md:my-10" />

            <Link
                href="/admin/products"
                onClick={openSideMenu}
                className="flex items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoShirtOutline size={30} />
                <span className="ml-3 text-xl">Productos</span>
            </Link>

            <Link
                href="/admin/orders"
                onClick={openSideMenu}
                className="flex items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>

            <Link
                href="/admin/users"
                onClick={openSideMenu}
                className="flex items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoPeopleOutline size={30} />
                <span className="ml-3 text-xl">Usuarios</span>
            </Link>
        </>
    )
}
