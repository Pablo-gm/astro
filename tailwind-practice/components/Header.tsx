'use client'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    const switchMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if(darkMode){
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add("dark");
        } else if (darkMode === false){
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark");
        } else {
            setDarkMode(localStorage.getItem("darkMode") === "true");
        }
    }, [darkMode])

  return (
    <header>
        <div className='transition cursor-pointer' onClick={switchMode}>
            {!darkMode ? (
                    <button className='btn'>Dark mode</button>
                ) : (
                    <button className='btn'>Light mode</button>
                )
             }
        </div>
    </header>
  )
}
