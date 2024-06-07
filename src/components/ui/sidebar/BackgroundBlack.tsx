"use client"

import useMenu from "./useMenu"

export default function BackgroundBlack() {

    const { openSideMenu } = useMenu(false)

    return (
        <>

            {/* Background black */}
            <div className="hidden dark:block fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30" />

            {/* Blur */}

            <div
                onClick={openSideMenu}
                className="hidden dark:block  fade-in fixed top-0 left-0 w-screen h-screen cursor-pointer z-40 backdrop-filter backdrop-blur-sm"
            />
        </>
    )
}
