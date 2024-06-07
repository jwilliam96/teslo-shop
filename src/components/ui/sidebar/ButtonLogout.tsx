"use client"

import { logout } from "@/actions";
import { IoLogOutOutline } from "react-icons/io5";

export default function ButtonLogout() {
    return (
        <div>
            <button
                className="flex w-full items-center mt-2 mobile:mt-4 md:mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => logout()}
            >
                <IoLogOutOutline size={30} />
                <span className="ml-3 text-xl">Salir</span>
            </button>
        </div>
    )
}
