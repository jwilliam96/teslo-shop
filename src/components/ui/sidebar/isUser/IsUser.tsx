"use client"


import Link from "next/link";
import { IoPersonOutline, IoTicketOutline } from "react-icons/io5";
import useMenu from "../useMenu";

export function IsUser() {

    const { openSideMenu } = useMenu(false)

    return (
        <>
            <Link
                href="/profile"
                onClick={openSideMenu}
                className="flex items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoPersonOutline size={30} />
                <span className="ml-3 text-xl">Perfil</span>
            </Link>

            <Link
                href="/orders"
                onClick={openSideMenu}
                className="flex items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>
        </>
    )
}
