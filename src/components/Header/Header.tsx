import React, { useState } from 'react'
import './Header.styles.css'
import LightDarkMode from './LightDarkMode/LightDarkMode'
import Links from './Links/Links'
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
        <div className="header flex flex-row  items-center justify-between p-5">
            <h1 className="primary text-xl font-semibold">LOGO</h1>
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
