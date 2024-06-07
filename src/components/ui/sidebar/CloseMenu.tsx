"use client"


import { IoCloseOutline } from 'react-icons/io5'
import useMenu from './useMenu'

export default function CloseMenu() {

    const { openSideMenu } = useMenu(false)

    return (
        <IoCloseOutline
            size={50}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={openSideMenu}
        />
    )
}
