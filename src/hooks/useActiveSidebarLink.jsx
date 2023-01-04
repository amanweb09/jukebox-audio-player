import { useState } from "react"

const useActiveSidebarLink = () => {
    const [activeLink, setActiveLink] = useState('home')

    return [activeLink, setActiveLink];
}

export default useActiveSidebarLink