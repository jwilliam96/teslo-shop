import { useState } from "react"

const useMenu = (initial: boolean) => {

    const [onMenu, setOnMenu] = useState(initial)

    const openSideMenu = () => {
        if (onMenu) {
            document.querySelector("html")?.classList.add("dark")
        } else {
            document.querySelector("html")?.classList.remove("dark")
        }
    }

    return { openSideMenu }
}

export default useMenu