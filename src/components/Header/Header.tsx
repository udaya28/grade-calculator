import React, { useState } from 'react'
import './Header.styles.css'
import LightDarkMode from './LightDarkMode/LightDarkMode'
import Links from './Links/Links'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

function Header() {
    const [isOpen, setIsOpen] = useState(true)
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="p-3 header flex flex-row  items-center justify-between">
            <div className="flex flex-row items-center">
                <Logo />
                <h1 className="text-lg md:text-2xl font-bold hidden sm:block">Grade Calculator</h1>
            </div>
            <div className="flex flex-row  items-center justify-end  basis-1/2">
                <Links isOpen={isOpen} />
                <div className="flex justify-end items-center">
                    <LightDarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <Menu toggleMenu={toggleMenu} />
                </div>
            </div>
        </div>
    )
}

export default Header
