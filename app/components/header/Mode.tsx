"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";


const Mode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="text-gray-300 cursor-pointer">
            {theme === 'dark' ?
                <BsFillBrightnessHighFill
                    className="w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={() => setTheme('light')}
                /> :
                <BsMoon
                    className="text-gray-700 w-6 h-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    onClick={() => setTheme('dark')}
                />}
        </div>
    )
}

export default Mode