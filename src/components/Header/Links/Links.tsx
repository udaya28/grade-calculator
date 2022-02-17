import React from 'react'

interface Props {
    isOpen: boolean
}

function Links({ isOpen }: Props) {
    return (
        <nav
            className={`absolute right-6 top-20 bg-primary p-5 rounded ${
                isOpen && 'hidden'
            } md:static md:flex flex-row justify-evenly md:w-full md:bg-inherit md:p-0 md:animate-none animate-fade-in-down`}
        >
            <a
                href="#/"
                className="text-whiteLight hover:text-stone-50 md:text-secondary  md:hover:text-primary md:hover:underline font-semibold"
            >
                SGPA
            </a>
            <br />

            <a
                href="#/"
                className="text-whiteLight hover:text-stone-50 md:text-secondary  md:hover:text-primary md:hover:underline font-semibold"
            >
                CGPA
            </a>
            <br />

            <a
                href="#/"
                className="text-whiteLight hover:text-stone-50 md:text-secondary  md:hover:text-primary md:hover:underline font-semibold"
            >
                ABOUT US
            </a>
            <br />

            <a
                href="#/"
                className="text-whiteLight hover:text-stone-50 md:text-secondary  md:hover:text-primary md:hover:underline font-semibold"
            >
                CONTACT US
            </a>
        </nav>
    )
}

export default Links
